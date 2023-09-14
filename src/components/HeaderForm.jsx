import PropTypes from 'prop-types';
import { Buttons } from "./Buttons"
import "../styles/Form.css"

export function HeaderForm({data, onSubmit, onDelete}) {
  const {id, ...exceptID} = data;
  const isEmpty = Object.values(exceptID).every(x => x === '')

  return (
    <>
    <h3>Header</h3>
    <form onSubmit={onSubmit} data-index={data.id}>
      <div className="d-flex flex-column ">
        <div className="d-flex flex-wrap flex-md-nowrap">
          <div className="form-floating mb-3 me-2">
            <input type="text" className="form-control" name='firstName' defaultValue={data.firstName} required/>
            <label className="required-field">First Name</label>
          </div> 
          <div className="form-floating mb-3 me-2">
            <input type="text" className="form-control" name='lastName' defaultValue={data.lastName} required/>
            <label className="required-field">Last Name</label>
          </div>
          <div className="form-floating mb-3 me-2">
            <input type="tel" className="form-control" name='phone' defaultValue={data.phone}/>
            <label>Phone</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" name='location' defaultValue={data.location}/>
            <label>Location</label>
          </div>
        </div>
        <div className="d-flex flex-wrap flex-md-nowrap mb-2">
          <div className="form-floating flex-fill mb-3 me-2">
            <input
              type="email"
              className="form-control"
              name='email'
              defaultValue={data.email}
              required
            />
            <label className="required-field">Email address</label>
          </div>
          <div className="form-floating mb-3 me-2">
            <input type="text" className="form-control" name='linkedIn' defaultValue={data.linkedIn}/>
            <label>LinkedIn</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" name='portfolio' defaultValue={data.portfolio}/>
            <label>Portfolio</label>
          </div>
          <span className="mt-auto mb-auto">
          <Buttons text={isEmpty ? 'Cancel' : 'Delete'} index={data.id} onClick={onDelete}/>
          <button type="submit" className="btn btn-success btn-sm align-self-center ms-2">
            Save
          </button>
          </span>
        </div> 
      </div> 
    </form>
    </>
  )
}

HeaderForm.propTypes = {
  data: PropTypes.object,
  onSubmit: PropTypes.func,
  onDelete: PropTypes.func, 
}