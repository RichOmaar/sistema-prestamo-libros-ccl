import './book.css';
import { Link } from "react-router-dom";

const Book = ({book, fullImg}) => {
  return (
    <div className="card">
      <Link to={`/libros/${book.url}`}>
        <img src={book.imageUrl} className={`${!fullImg ? 'book__img' : 'img-fluid'}`} alt={book.title} />
      </Link>
      <div className="card-body">
        <Link to={`/libros/${book.url}`}>
          <h5
            className="card-title"
            data-bs-toggle="tooltip"
            data-bs-placement="top"
            data-bs-title="Tooltip on top"
          >
            {book.title}
          </h5>
        </Link>
        <p className="card-text">
          Autor: <strong>{book.author}</strong>
        </p>
        <p className="card-text">
          Categoría: <strong>{book.category}</strong>
        </p>
        <p className="card-text">
          Precio: <strong>${book.price}</strong>
        </p>
        <p className="card-text">
          Disponibles para préstamo: <strong>{book.free_stock}</strong>
        </p>
      </div>
    </div>
  );
};

export default Book;
