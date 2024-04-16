import { useEffect, useState } from 'react'
import './users.css'
import User from '../../components/User/User';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const usersStored = JSON.parse(localStorage.getItem("users"));
        if (usersStored !== null) {
        setUsers(usersStored);
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