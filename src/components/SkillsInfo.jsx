import PropTypes from 'prop-types';
import { Buttons } from "./Buttons"

export function SkillsInfo({skills, onClick}) {
  if(skills.skills) {
    const skillList = skills.skills.split(',')
    const skillItems = skillList.map((skill, index) => <li key={index}>{skill}</li>)

    return (
      <div className="d-flex justify-content-between">
        <ul className="row-list flex-fill">{skillItems}</ul>
        <Buttons dataIndex={skills.id} text="Edit" onClick={onClick}/>
      </div>
    )
  }
}

SkillsInfo.propTypes = {
  skills: PropTypes.object,
  onClick: PropTypes.func,
}