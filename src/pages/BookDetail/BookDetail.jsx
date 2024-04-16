import { useParams } from 'react-router-dom';
import './bookDetail.css'
import { useEffect, useState } from 'react';
import Book from '../../components/Book/Book';

const BookDetail = () => {
    let { slug } = useParams();

    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        let requiredBook = slug;

        const booksStored = JSON.parse(localStorage.getItem("books"));
        if (booksStored !== null) {
            const findBook = booksStored.find((book) => book.url == requiredBook);
            setBookData(findBook)
        }
    },[slug])
  return (
    <div className="container py-4">
        <h1 className='text-center mb-4'>Detalles del libro: {bookData.title}</h1>
        <div className='d-flex justify-content-center align-items-center'>
            <div className='col-12 col-xl-4 col-lg-4 col-md-8 col-sm-12'>
                <Book book={bookData} fullImg={true}/>
            </div>
        </div>
    </div>
  )
}

export default BookDetail