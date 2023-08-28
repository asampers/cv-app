import { Data } from './Data';
import { Buttons } from './Buttons';
import { HeaderForm } from './HeaderForm';
import '../styles/Header.css'

export function Header() {
  const item = Data();

  if (!item.showForm) {
    return (
      <>
      <div className='container-fluid d-flex flex-column justify-content-center align-items-center'>
        <div className='d-flex align-items-center'>
          <h2>{item.noData && 'Header'}</h2>
          <h3>{item.data.firstName} {item.data.lastName}</h3>
          <Buttons text={item.noData ? "Add" : "Edit"} onClick={item.toggleShowForm}/>
        </div>
        <div className='d-flex align-items-center mt-2'>
          {item.data.email && <p className='me-3'><ion-icon name="mail-outline"></ion-icon>{item.data.email}</p> }
          {item.data.phone && <p className='me-3'><ion-icon name="call-outline"></ion-icon>{item.data.phone}</p> }
          {item.data.location && <p className='me-3'><ion-icon name="location-outline"></ion-icon>{item.data.location}</p> }
          {item.data.linkedIn && <p className='me-3'><ion-icon name="logo-linkedin"></ion-icon>{item.data.linkedIn}</p> }
          {item.data.portfolio && <p className='me-3'><ion-icon name="book-outline"></ion-icon>{item.data.portfolio}</p> }
        </div>
      </div>
      </>
    )
  }  
  return (
    <HeaderForm onSubmit={item.handleSubmit} data={item.data} />
  )
}