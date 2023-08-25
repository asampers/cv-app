export function Experience() {
  
  return (
    <>
    <form>
      <div className="d-flex">
        <div className="d-flex flex-column">
          <div className="d-flex">
            <div className="form-floating mb-3 me-2">
              <input type="text" className="form-control" placeholder="Administrator"/>
              <label>Job Title</label>
            </div> 
            <div className="form-floating mb-3 me-2">
              <input type="text" className="form-control" placeholder="Verizon"/>
              <label>Company</label>
            </div>
          </div>
          <div className="form-floating mb-3 me-2">
            <textarea
              className="form-control"
              placeholder="Responsibilities"
              style={{ height: 100 }}
              defaultValue={""}
            />
            <label>Responsibilities</label>
          </div>
        </div>
        <div className="d-flex flex-column">
          <div className="form-floating mb-3 me-2">
            <input
              type="month"
              className="form-control"
              placeholder="September"
            />
            <label>From</label>
          </div>
          <div className="form-floating mb-3 me-2">
            <input type="month" className="form-control" placeholder="May"/>
            <label>To</label>
          </div>
        </div> 
        <button type="submit" className="btn btn-primary align-self-center ms-4">
            Submit
          </button>
      </div> 
    </form>
    </>
  )
}