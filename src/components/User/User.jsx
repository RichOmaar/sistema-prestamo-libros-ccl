import { IoIosMale } from "react-icons/io";
import { IoIosFemale } from "react-icons/io";
import { Link } from "react-router-dom";
const User = ({ user }) => {
  function handleGender(gender) {
    switch (gender) {
      case "M":
        return (
          <p>
            Género: Másculino <IoIosMale />
          </p>
        );
      case "F":
        return (
          <p>
            Género: Femenino <IoIosFemale />
          </p>
        );
      default:
        return <p>Género: No especificado</p>;
    }
  }

  return (
    <div className="card">
      <div className="row f-flex align-items-center">
        <div className="col-4">
          <img className="img-fluid p-3" src="/profile.png" alt="Card image" />
        </div>
        <div className="col-8">
          <div className="card-body">
            <h5>Nombre: {user.name}</h5>
            <h5>Apellido: {user.lastName}</h5>
            <p className="card-text m-0">Cumpleaños: {user.birth}</p>
            <p className="card-text">{handleGender(user.gender)}</p>
            <Link to={`/usuarios/${user.idUser}`} className="btn btn-info">
              Ver perfil
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
