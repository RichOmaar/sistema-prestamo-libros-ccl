import { useEffect, useState } from 'react'
import './books.css'
import Book from '../../components/Book/Book';
import Swal from 'sweetalert2';

const Books = () => {
  const [books, setBooks] = useState([]);

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
  },[])
  
  return (
    <div className='container py-4'>
      <h1 className='text-center'>Libros</h1>
      <div className='row'>
        {books.length > 0 &&
          books.map((book) => (
            <div className='col-12 col-xl-3 col-lg-3 col-md-6 col-sm-12 my-2' key={'book-'+book.idBook}>
              <Book book={book} fullImg={true}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Books