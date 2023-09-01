import { EducationForm } from "./EducationForm"
import { Buttons } from "./Buttons";
import { Data } from "./Data"
import { EducationInfo } from "./EducationInfo";
import { Fragment } from "react";

function Education() {
  const items = Data();
  
    return (
      <>
      <div className='d-flex flex-column justify-content-center align-items-center w-100'>
        <div className='border-top border-dark d-flex align-items-center w-100'>
          <h3>Education</h3>
          {!items.showForm && <Buttons text="Add" onClick={items.noData ? items.toggleShowForm : items.addEntry}/> }
        </div>
        {items.data.map((school) => (
          <Fragment key={school.id}>
            {(items.displayInfo(school.id)) && <EducationInfo onClick={items.toggleEdit} data={school} />}
            {(items.displayForm(school.id)) && <EducationForm onSubmit={items.handleSubmit} onDelete={items.handleDelete} data={school}/>}
          </Fragment>
        ))}
      </div>
      </>
    )
}

export { Education }