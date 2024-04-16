import { useEffect, useState } from "react";
import "./loanBook.css";
import Swal from 'sweetalert2'

const LoanBook = () => {
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const bookStored = JSON.parse(localStorage.getItem("books"));
    if (bookStored !== null) {
      setBooks(bookStored);
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

    const usersStored = JSON.parse(localStorage.getItem("users"));
    if (usersStored !== null) {
      setUsers(usersStored);
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
  }, []);

  function handleLoanBook(e) {
    e.preventDefault();
    let idUserForm = e.target.user.value;
    let eanForm = e.target.book.value;
    let loan_dateForm = e.target.loan_date.value;

    let dateParts = loan_dateForm.split('-');
    let newDate = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
    
    const findUser = users.find((user) => user.idUser == idUserForm);
    let idUser = findUser.idUser;
    let name = findUser.name;
    let lastName = findUser.lastName;

    const findBook = books.find((book) => book.ean == eanForm);
    let title = findBook.title;

    const loansStored = JSON.parse(localStorage.getItem("loans"));
    if (loansStored !== null) {
      loansStored.push({ idLoan: loansStored.length + 1, idUser, name, lastName, ean: eanForm, title, loan_date: newDate });
      localStorage.setItem("loans", JSON.stringify(loansStored));
    }

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Se prestó el libro: ' + title,
      showConfirmButton: false,
      timer: 1500
    })

    e.target.reset();
  }

  return (
    <div className="container py-4">
      <h1 className="text-center">Préstamo de libros</h1>
      <form className="mx-auto my-5 form__loan" onSubmit={(e) => handleLoanBook(e)}>
        <div className="mb-3">
          <label htmlFor="book">Selecciona un libro</label>
          <select className="form-control" id="book" required>
            {books.length > 0 &&
              books.map((book) => (
                <option value={book.ean} key={"book-" + book.ean}>
                  {book.title}
                </option>
              ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="user">Selecciona un usuario</label>
          <select className="form-control" id="user" required>
            {users.length > 0 &&
              users.map((user) => (
                <option value={user.idUser} key={"user-" + user.idUser}>
                  {`${user.name} ${user.lastName} - ${user.idUser}`}
                </option>
              ))}
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="user">Selecciona la fecha de prestamo</label>
          <input type="date" className="form-control" id="loan_date" required />
        </div>
        <button type="submit" className="btn btn-primary">
          Realizar préstamo
        </button>
      </form>
    </div>
  );
};

export default LoanBook;
