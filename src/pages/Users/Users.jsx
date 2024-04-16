import { useEffect, useState } from 'react'
import './users.css'
import User from '../../components/User/User';
import Swal from 'sweetalert2';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
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
    },[])
  return (
    <div className='container py-4'>
      <h1 className='text-center'>Usuarios</h1>
      <div className='row'>
        {users.length > 0 &&
          users.map((user) => (
            <div className='col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12 my-2' key={'user-'+user.idUser}>
              <User user={user}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Users