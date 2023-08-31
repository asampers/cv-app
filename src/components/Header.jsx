import { Data } from './Data';
import { Buttons } from './Buttons';
import { HeaderForm } from './HeaderForm';
import { HeaderInfo } from './HeaderInfo';
import '../styles/Header.css'

export function Header() {
  const item = Data();
  const person = item.data[0]
  const fullName = person.firstName + ' ' + person.lastName
  const noName = fullName.trim().length === 0 || fullName == 'undefined undefined'
  
  if (!item.showForm) {
    return (
      <>
      <div className='container-fluid d-flex flex-column justify-content-center align-items-center'>
        <div className='d-flex align-items-center'>
          <h3>{noName ? 'Header' : fullName}</h3>
          <Buttons text={item.noData ? "Add" : "Edit"} onClick={item.toggleShowForm}/>
        </div>
        <HeaderInfo person={person} />
      </div>
      </>
    )
  }  
  return (
    <HeaderForm onSubmit={item.handleSubmit} data={person} />
  )
}