import { useEffect, useState } from "react";
import "./home.css";
import OwlCarousel from "react-owl-carousel";
import { Link } from "react-router-dom";
import User from "../../components/User/User";
import Book from "../../components/Book/Book";
import Loan from "../../components/Loan/Loan";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [loans, setLoans] = useState([]);

  const state = {
    responsive: {
      0: {
        items: 1,
        center: true,
        margin: 15,
      },
      576: {
        items: 1,
        center: true,
        margin: 15,
      },
      768: {
        items: 2,
        center: true,
        margin: 15,
      },
      992: {
        items: 2,
        center: true,
        margin: 15,
      },
      1200: {
        items: 2,
        center: true,
        margin: 15,
      },
    },
  };

  const stateUsers = {
    responsive: {
      0: {
        items: 1,
        center: true,
      },
      576: {
        items: 1,
        center: true,
      },
      768: {
        items: 1,
        center: true,
      },
      992: {
        items: 1,
        center: true,
      },
      1200: {
        items: 1,
        center: true,
      },
    },
  };

  useEffect(() => {
    const bookStored = JSON.parse(localStorage.getItem("books"));
    if (bookStored !== null) {
      setBooks(bookStored);
    }

    const usersStored = JSON.parse(localStorage.getItem("users"));
    if (usersStored !== null) {
      setUsers(usersStored);
    }

    const loansStored = JSON.parse(localStorage.getItem("loans"));
    if (loansStored !== null) {
      setLoans(loansStored);
    }
  }, []);

  return (
    <div className="container py-4">
      <h1 className="text-center">Sistema de préstamo de libros</h1>
      <div className="row">
        <div className="col-12 col-xl-6">
          <h3>Usuarios</h3>
          {users.length > 0 ? (
            <>
              <OwlCarousel
                className="owl-theme certifications__carousel"
                autoplay={true}
                loop
                dots={true}
                animateIn={true}
                responsive={stateUsers.responsive}
                center={true}
              >
                {users.map((user) => (
                  <User user={user} key={"user-" + user.idUser} />
                ))}
              </OwlCarousel>
              <div className="text-center">
                <Link to={"/usuarios"} className="btn btn-primary">
                  Ver todos
                </Link>
              </div>
            </>
          ) : (
            <div className="card" aria-hidden="true">
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <a
                  className="btn btn-primary disabled placeholder col-6"
                  aria-disabled="true"
                ></a>
              </div>
            </div>
          )}
        </div>
        <div className="col-12 col-xl-6">
          <h3>Libros</h3>
          {books.length > 0 ? (
            <OwlCarousel
              className="owl-theme certifications__carousel"
              autoplay={true}
              loop
              dots={false}
              animateIn={true}
              responsive={state.responsive}
              center={true}
            >
              {books.map((book) => (
                <Book book={book} key={"book-" + book.idBook} />
              ))}
            </OwlCarousel>
          ) : (
            <div className="card" aria-hidden="true">
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <a
                  className="btn btn-primary disabled placeholder col-6"
                  aria-disabled="true"
                ></a>
              </div>
            </div>
          )}
        </div>
        <div className="col-12 col-xl-12">
          <h3>Préstamos</h3>
          {loans.length > 0 ? (
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
                {loans.map((loan) => (
                  <Loan loan={loan} key={"prestamo-" + loan.idLoan} />
                ))}
              </tbody>
            </table>
          ) : (
            <div className="card" aria-hidden="true">
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <a
                  className="btn btn-primary disabled placeholder col-6"
                  aria-disabled="true"
                ></a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
