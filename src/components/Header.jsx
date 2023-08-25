export function Header() {
  
  return (
    <>
    <h2>Header</h2>
    <form>
      <div className="d-flex flex-column">
        <div className="d-flex">
          <div className="form-floating mb-3 me-2">
            <input type="text" className="form-control" placeholder="Jane"/>
            <label>First Name</label>
          </div> 
          <div className="form-floating mb-3 me-2">
            <input type="text" className="form-control" placeholder="Smith"/>
            <label>Last Name</label>
          </div>
          <div className="form-floating mb-3 me-2">
            <input type="tel" className="form-control" placeholder="123-456-7899"/>
            <label>Phone</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" placeholder="NYC"/>
            <label>Location</label>
          </div>
        </div>
        <div className="d-flex">
          <div className="form-floating flex-fill mb-3 me-2">
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
            />
            <label>Email address</label>
          </div>
          <div className="form-floating mb-3 me-2">
            <input type="text" className="form-control" placeholder="LinkedIn"/>
            <label>LinkedIn</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" placeholder="Portfolio"/>
            <label>Portfolio</label>
          </div>
          <button type="submit" className="btn btn-primary align-self-center ms-4">
            Submit
          </button>
        </div> 
      </div> 
    </form>
    </>
  )
}