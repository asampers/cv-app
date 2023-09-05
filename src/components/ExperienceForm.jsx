/* eslint-disable react/prop-types */
import { Buttons } from "./Buttons"
import "../styles/Form.css"

export function ExperienceForm({data, onSubmit, onDelete}) {
  const {id, ...exceptID} = data;
  const isEmpty = Object.values(exceptID).every(x => x === '')
  
  return (
    <form onSubmit={onSubmit} data-index={data.id}>
        <div className="d-flex flex-column">
          <div className="d-flex">
            <div className="form-floating mb-3 me-2">
              <input type="text" className="form-control" name="title" defaultValue={data.title} required/>
              <label className="required-field">Job Title</label>
            </div> 
            <div className="form-floating mb-3 me-2">
              <input type="text" className="form-control" name="company" defaultValue={data.company} required/>
              <label className="required-field">Company</label>
            </div>
            <div className="form-floating mb-3 me-2">
              <input
                type="month"
                className="form-control"
                name="startDate"
                defaultValue={data.startDate}
                required
              />
              <label className="required-field">From</label>
            </div>
            <div className="form-floating mb-3 me-2">
              <input type="month" className="form-control" name="endDate" defaultValue={data.endDate} required/>
              <label className="required-field">To</label>
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className="form-floating flex-fill mb-3 me-2">
            <textarea
              className="form-control"
              name="duties"
              style={{ height: 100 }}
              defaultValue={data.duties}
            />
            <label>Responsibilities</label>
          </div>
          <Buttons text={isEmpty ? 'Cancel' : 'Delete'} index={data.id} onClick={onDelete}/>
          <button type="submit" className="btn btn-success btn-sm align-self-center ms-2">
            Save
          </button>
        </div> 
    </form>
  )  
}