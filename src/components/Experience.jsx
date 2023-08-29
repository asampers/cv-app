import { ExperienceForm } from "./ExperienceForm"
import { ExperienceInfo } from "./ExperienceInfo";
import { Buttons } from "./Buttons";
import { Data } from "./Data"
import { Fragment } from "react";

export function Experience() {
  const items = Data();

  return (
    <>
      <div className='container-fluid d-flex flex-column justify-content-center align-items-center'>
        <div className='d-flex align-items-center'>
          {<h3>Experience</h3>}
          <Buttons text="Add Job" onClick={items.noData ? items.toggleShowForm : items.addEntry}/>
        </div>
        {items.data.map((job) => (
          <Fragment key={job.id}>
            {(items.displayInfo(job.id)) && <ExperienceInfo onClick={items.toggleEdit} data={job} />}
            {(items.displayForm(job.id)) && <ExperienceForm onSubmit={items.handleSubmit} data={job} />}
          </Fragment>
        ))}
      </div>
    </>
  )
}