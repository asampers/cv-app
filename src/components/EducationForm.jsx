/* eslint-disable react/prop-types */
import { Buttons } from "./Buttons"
import "../styles/Form.css";

export function EducationForm({data, onSubmit, onDelete}) {
  const {id, ...exceptID} = data;
  const isEmpty = Object.values(exceptID).every(x => x === '')
  return (
    <form onSubmit={onSubmit} data-index={data.id}>
      <div className="d-flex flex-column">
        <div className="d-flex">
          <div className="form-floating flex-fill mb-3 me-2">
            <input type="text" className="form-control" name="school" defaultValue={data.school} required/>
            <label className="required-field">School/University</label>
          </div> 
          <div className="form-floating mb-3 me-2">
            <input
              type="month"
              className="form-control"
              name="startDate"
              defaultValue={data.startDate}
            />
            <label>From</label>
          </div>
          <div className="form-floating mb-3 me-2">
            <input type="month" className="form-control" name="endDate" defaultValue={data.endDate}/>
            <label>To</label>
          </div>
        </div>
        <div className="d-flex">
          <div className="form-floating mb-3 me-2">
            <input type="text" className="form-control" name="degree" defaultValue={data.degree} required/>
            <label className="required-field">Degree</label>
          </div>
          <div className="form-floating mb-3 me-2">
            <input type="text" className="form-control" name="major" defaultValue={data.major} required/>
            <label className="required-field">Major</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" name="minor" defaultValue={data.minor}/>
            <label>Minor</label>
          </div>
          <Buttons text={isEmpty ? 'Cancel' : 'Delete'} index={data.id} onClick={onDelete}/>
          <button type="submit" className="btn btn-success btn-sm align-self-center ms-2">
            Save
          </button>
        </div> 
      </div> 
    </form>

  )
}