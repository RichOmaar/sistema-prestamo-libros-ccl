import './navbar.css';
import { IoHomeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to={"/"} >
          <IoHomeSharp className="nav-link active fs-2 home_btn"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to={"/libros"} className="nav-link" >
                Libros
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/usuarios"} className="nav-link" >
                Usuarios
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/prestamos"} className="nav-link" >
                Préstamos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
