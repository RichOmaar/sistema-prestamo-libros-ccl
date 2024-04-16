import { Link } from "react-router-dom";
// data-bs-dismiss="offcanvas"
// data-bs-dismiss="close"
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link to={"/"} >
          Navbar
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
            <li className="nav-item" data-bs-dismiss="close">
              <Link to={"/"} className="nav-link active">
                Home
              </Link>
            </li>
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
