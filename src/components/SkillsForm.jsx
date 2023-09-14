import PropTypes from 'prop-types';
import { Buttons } from "./Buttons"

export function SkillsForm({data, onSubmit, onDelete}) {
  const {id, ...exceptID} = data;
  const isEmpty = Object.values(exceptID).every(x => x === '')

  return (
    <form className="skills" onSubmit={onSubmit} data-index={data.id}>
      <div className="d-flex flex-wrap flex-md-nowrap">
          <div className="skills-box form-floating flex-fill mb-3 me-2">
            <textarea
              className="form-control"
              name="skills"
              style={{ height: 100 }}
              defaultValue={data.skills}
            />
            <label>Type to enter skills, separate by comma</label>
          </div>
        <Buttons text={isEmpty ? 'Cancel' : 'Delete'} index={data.id} onClick={onDelete}/>
        <button type="submit" className="btn btn-success btn-sm align-self-center ms-2">
            Save
          </button>
      </div> 
    </form>
  )
}

SkillsForm.propTypes = {
  data: PropTypes.object,
  onSubmit: PropTypes.func,
  onDelete: PropTypes.func,
}  