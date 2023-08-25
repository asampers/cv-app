import { useState } from 'react';
import { Buttons } from './Buttons';
import { HeaderForm } from './HeaderForm';
import '../styles/Header.css'

export function Header() {
  const [data, setData] = useState({});
  const [showForm, setShowForm] = useState(false);
  const noData = Object.keys(data).length === 0;
  
  function toggleShowForm() {
    setShowForm(!showForm);
  }

  function handleSubmit(e) {
    e.preventDefault();
    toggleShowForm();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    setData(formJson);
  }

  if (!showForm) {
    return (
      <>
      <div className='container-fluid d-flex flex-column justify-content-center align-items-center'>
        <div className='d-flex align-items-center'>
          <h2>{noData && 'Header'}</h2>
          <h3>{data.firstName} {data.lastName}</h3>
          <Buttons text={noData ? "Add" : "Edit"} onClick={toggleShowForm}/>
        </div>
        <div className='d-flex align-items-center mt-2'>
          {data.email && <p className='me-3'><ion-icon name="mail-outline"></ion-icon>{data.email}</p> }
          {data.phone && <p className='me-3'><ion-icon name="call-outline"></ion-icon>{data.phone}</p> }
          {data.location && <p className='me-3'><ion-icon name="location-outline"></ion-icon>{data.location}</p> }
          {data.linkedIn && <p className='me-3'><ion-icon name="logo-linkedin"></ion-icon>{data.linkedIn}</p> }
          {data.portfolio && <p className='me-3'><ion-icon name="book-outline"></ion-icon>{data.portfolio}</p> }
        </div>
      </div>
      </>
    )
  }  
  return (
    <HeaderForm onSubmit={handleSubmit} data={data} />
  )
}