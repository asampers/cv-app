function Education() {
  return (
    <>
    <form>
      <div className="d-flex flex-column">
        <div className="d-flex">
          <div className="form-floating mb-3 me-2">
            <input type="text" className="form-control" placeholder="UCLA"/>
            <label>School/University</label>
          </div> 
          <div className="form-floating mb-3 me-2">
            <input type="text" className="form-control" placeholder="Bachelors"/>
            <label>Degree</label>
          </div>
          <div className="form-floating mb-3 me-2">
            <input type="text" className="form-control" placeholder="Computer Science"/>
            <label>Major</label>
          </div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" placeholder="Spanish"/>
            <label>Minor</label>
          </div>
        </div>
        <div className="d-flex">
          <div className="form-floating flex-fill mb-3 me-2">
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
          <button type="submit" className="btn btn-primary align-self-center ms-4">
            Submit
          </button>
        </div> 
      </div> 
    </form>
    </>
  )
}

export { Education }