import { useEffect, useState } from "react";
import "./loan.css";
import Swal from 'sweetalert2'
const Loan = ({ loan }) => {
    const [loans, setLoans] = useState([]);
  
    useEffect(() => {
      const loansStored = JSON.parse(localStorage.getItem("loans"));
      if (loansStored !== null) {
        setLoans(loansStored);
      } else {
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'No ha cargado la información, recarrga la página',
          showConfirmButton: false,
          timer: 1500
        })
      }
    }, []);
    
    function handleStatus(status) {
        if(!status) {
            return <p>No Devuelto</p>
        }
        return <p>Devuelto</p>

    }
  return (!loans ? 
    <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
    </div>
    :
    <tr>
      <td>
        <div className="d-flex align-items-center">
            <p className="fw-bold mb-1">{loan.idLoan}</p>
        </div>
      </td>
      <td>
        <p className="mb-0">{loan.title}</p>
      </td>
      <td>
        <p className="mb-0">{`${loan.name} ${loan.lastName}`}</p>
      </td>
      <td>
        <span className="mx-1">
          {handleStatus(loan.returned)}
        </span>
      </td>
      <td>
        <p>{loan.loan_date}</p>
      </td>
    </tr>
  );
};

export default Loan;
