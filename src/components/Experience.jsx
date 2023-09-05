import { ExperienceForm } from "./ExperienceForm"
import { ExperienceInfo } from "./ExperienceInfo";
import { Buttons } from "./Buttons";
import { Data } from "./Data"
import { Fragment } from "react";

export function Experience() {
  const items = Data();

  return (
    <>
      <div className='d-flex flex-column w-100'>
        <div className='border-top border-dark d-flex align-items-center w-100'>
          <h3>Experience</h3>
          {!items.showForm && <Buttons text="Add" onClick={items.noData ? items.toggleShowForm : items.addEntry}/> }
        </div>
        {items.data.map((job) => (
          <Fragment key={job.id}>
            {(items.displayInfo(job.id)) && <ExperienceInfo onClick={items.toggleEdit} data={job} showBtn={!items.showForm} />}
            {(items.displayForm(job.id)) && <ExperienceForm onSubmit={items.handleSubmit} onDelete={items.handleDelete} data={job} />}
          </Fragment>
        ))}
      </div>
    </>
  )
}