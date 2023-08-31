/* eslint-disable react/prop-types */
export function HeaderInfo({person}) {
  return (
    <div className='d-flex align-items-center mt-2'>
      {person.email && <p className='me-3'><ion-icon name="mail-outline"></ion-icon>{person.email}</p> }
      {person.phone && <p className='me-3'><ion-icon name="call-outline"></ion-icon>{person.phone}</p> }
      {person.location && <p className='me-3'><ion-icon name="location-outline"></ion-icon>{person.location}</p> }
      {person.linkedIn && <p className='me-3'><ion-icon name="logo-linkedin"></ion-icon>{person.linkedIn}</p> }
      {person.portfolio && <p className='me-3'><ion-icon name="book-outline"></ion-icon>{person.portfolio}</p> }
    </div>
  )  
}