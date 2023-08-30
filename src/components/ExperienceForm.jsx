/* eslint-disable react/prop-types */
export function ExperienceForm({data, onSubmit}) {
  return (
    <form onSubmit={onSubmit} data-index={data.id}>
      <div className="d-flex">
        <div className="d-flex flex-column">
          <div className="d-flex">
            <div className="form-floating mb-3 me-2">
              <input type="text" className="form-control" name="title" defaultValue={data.title}/>
              <label>Job Title</label>
            </div> 
            <div className="form-floating mb-3 me-2">
              <input type="text" className="form-control" name="company" defaultValue={data.company}/>
              <label>Company</label>
            </div>
          </div>
          <div className="form-floating mb-3 me-2">
            <textarea
              className="form-control"
              name="duties"
              style={{ height: 100 }}
              defaultValue={data.duties}
            />
            <label>Responsibilities</label>
          </div>
        </div>
        <div className="d-flex flex-column">
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
        <button type="submit" className="btn btn-primary align-self-center ms-4">
            Submit
          </button>
      </div> 
    </form>
  )  
}