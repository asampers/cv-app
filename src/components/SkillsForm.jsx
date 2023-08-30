/* eslint-disable react/prop-types */
export function SkillsForm({data, onSubmit}) {
  return (
    <form className="skills" onSubmit={onSubmit} data-index={data.id}>
      <div className="d-flex">
          <div className="form-floating flex-fill mb-3 me-2">
            <textarea
              className="form-control"
              name="skills"
              style={{ height: 100 }}
              defaultValue={data.skills}
            />
            <label>Type to enter skills, separate by comma</label>
          </div>
        <button type="submit" className="btn btn-primary align-self-center ms-4">
            Submit
          </button>
      </div> 
    </form>
  )
}