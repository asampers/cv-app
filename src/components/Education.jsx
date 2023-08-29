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
        {items.data.map((school, index) => (
          <Fragment key={index}>
            {(items.displayInfo(index)) && <EducationInfo onClick={items.toggleEdit} data={school} index={index} />}
            {(items.displayForm(index)) && <EducationForm onSubmit={items.handleSubmit} data={school} index={index}/>}
          </Fragment>
        ))}
      </div>
      </>
    )


    

}

export { Education }