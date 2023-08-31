import { EducationForm } from "./EducationForm"
import { Buttons } from "./Buttons";
import { Data } from "./Data"
import { EducationInfo } from "./EducationInfo";
import { Fragment } from "react";

function Education() {
  const items = Data();
  
    return (
      <>
      <div className='container-fluid d-flex flex-column justify-content-center align-items-center'>
        <div className='d-flex align-items-center'>
          {<h3>Education</h3>}
          <Buttons text="Add School" onClick={items.noData ? items.toggleShowForm : items.addEntry}/>
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