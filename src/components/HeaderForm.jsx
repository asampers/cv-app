/* eslint-disable react/prop-types */
export function HeaderForm({data, onSubmit}) {
  return (
    <>
    <h2>Header</h2>
    <form onSubmit={onSubmit}>
      <div className="d-flex flex-column">
        <div className="d-flex">
          <div className="form-floating mb-3 me-2">
            <input type="text" className="form-control" name='firstName' defaultValue={data.firstName}/>
            <label>First Name</label>
          </div> 
          <div className="form-floating mb-3 me-2">
            <input type="text" className="form-control" name='lastName' defaultValue={data.lastName}/>
            <label>Last Name</label>
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
        <div className="d-flex">
          <div className="form-floating flex-fill mb-3 me-2">
            <input
              type="email"
              className="form-control"
              name='email'
              defaultValue={data.email}
            />
            <label>Email address</label>
          </div>
          <div className="form-floating mb-3 me-2">
            <input type="text" className="form-control" name='linkedIn' defaultValue={data.linkedIn}/>
            <label>LinkedIn</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" name='portfolio' defaultValue={data.portfolio}/>
            <label>Portfolio</label>
          </div>
          <button type="submit" className="btn btn-primary align-self-center ms-4">
            Save
          </button>
        </div> 
      </div> 
    </form>
    </>
  )
}