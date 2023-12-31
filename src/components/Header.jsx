import { Data } from './Data';
import { Buttons } from './Buttons';
import { HeaderForm } from './HeaderForm';
import { HeaderInfo } from './HeaderInfo';


export function Header() {
  const item = Data();
  const person = item.data[0]
  const fullName = person.firstName + ' ' + person.lastName
  const noName = fullName.trim().length === 0 || fullName == 'undefined undefined'
  
    return (
      <>
      <div className='container-fluid d-flex flex-column justify-content-center align-items-center'>
        <div className='d-flex align-items-center'>
          {!item.showForm && <h3>{noName ? 'Header' : fullName}</h3> }
          {!item.showForm && <Buttons text={item.noData ? "Add" : "Edit"} onClick={item.toggleShowForm}/> }
        </div>
        {item.showForm ? <HeaderForm onSubmit={item.handleSubmit} onDelete={item.handleDelete} data={person} /> : <HeaderInfo person={person} /> }
      </div>
      </>
    )
}