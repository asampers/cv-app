import '../styles/Skills.css'

function Skills() {
  return (
    <>
    <h2>Skills</h2>
    <form className="skills">
      <div className="d-flex">
          <div className="form-floating flex-fill mb-3 me-2">
            <textarea
              className="form-control"
              placeholder="Responsibilities"
              style={{ height: 100 }}
              defaultValue={""}
            />
            <label>Type to enter skills, separate by comma</label>
          </div>
        <button type="submit" className="btn btn-primary align-self-center ms-4">
            Submit
          </button>
      </div> 
    </form>
    </>
  )
}

export { Skills };