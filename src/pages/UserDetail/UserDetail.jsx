import { useParams } from "react-router-dom";
import "./userDetail.css";
import { useEffect, useState } from "react";
import User from "../../components/User/User";
import Loan from "../../components/Loan/Loan";
import Swal from "sweetalert2";

const UserDetail = () => {
  let { user } = useParams();

  const [userData, setUserData] = useState([]);
  const [userBooks, setUserBooks] = useState([]);

  useEffect(() => {
    let requiredUser = user;

    const usersStored = JSON.parse(localStorage.getItem("users"));
    if (usersStored !== null) {
      const findUser = usersStored.find((user) => user.idUser == requiredUser);
      setUserData(findUser);

      const loanBooks = JSON.parse(localStorage.getItem("loans"));
      if (loanBooks !== null) {
        const findBooks = loanBooks.filter(
          (book) => book.idUser == findUser.idUser
        );
        setUserBooks(findBooks);
      } else {
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'No ha cargado la información, recarrga la página',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          window.location.reload();
        })
    }
    }
  }, [user]);

  return !userData ? (
    <h2>Ha ocurrido un error al cargar la información, inténtalo nuevamente</h2>
  ) : (
    <div className="container py-4">
        <div className="row d-flex align-items-center">
            <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 mb-5">
                <User user={userData} />
            </div>
            <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                <h2>Relación de libros de {userData.name}</h2>
                <div className="home">
                  <table className="table align-middle mb-0 bg-white">
                  <thead className="bg-light">
                      <tr>
                      <th>ID Préstamo</th>
                      <th>Nombre Libro</th>
                      <th>Nombre usuario</th>
                      <th>Status</th>
                      <th>Fecha préstamo</th>
                      </tr>
                  </thead>
                  <tbody>
                      {userBooks.map((loan) => (
                      <Loan loan={loan} key={"prestamo-" + loan.idLoan} />
                      ))}
                  </tbody>
                  </table>
                </div>
            </div>
        </div>
    </div>
  );
};

export default UserDetail;
