import { Data } from './Data';
import { Buttons } from './Buttons';
import { HeaderForm } from './HeaderForm';
import '../styles/Header.css'

export function Header() {
  const item = Data();
  const person = item.data[0]
  if (!item.showForm) {
    return (
      <>
      <div className='container-fluid d-flex flex-column justify-content-center align-items-center'>
        <div className='d-flex align-items-center'>
          <h2>{item.noData && 'Header'}</h2>
          <h3>{person.firstName} {person.lastName}</h3>
          <Buttons text={item.noData ? "Add" : "Edit"} onClick={item.toggleShowForm}/>
        </div>
        <div className='d-flex align-items-center mt-2'>
          {person.email && <p className='me-3'><ion-icon name="mail-outline"></ion-icon>{person.email}</p> }
          {person.phone && <p className='me-3'><ion-icon name="call-outline"></ion-icon>{person.phone}</p> }
          {person.location && <p className='me-3'><ion-icon name="location-outline"></ion-icon>{person.location}</p> }
          {person.linkedIn && <p className='me-3'><ion-icon name="logo-linkedin"></ion-icon>{person.linkedIn}</p> }
          {person.portfolio && <p className='me-3'><ion-icon name="book-outline"></ion-icon>{person.portfolio}</p> }
        </div>
      </div>
      </>
    )
  }  
  return (
    <HeaderForm onSubmit={item.handleSubmit} data={person} />
  )
}