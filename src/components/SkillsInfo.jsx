/* eslint-disable react/prop-types */
import { Buttons } from "./Buttons"

export function SkillsInfo({skills, onClick}) {
  if(skills.skills) {
    const skillList = skills.skills.split(',')
    const skillItems = skillList.map((skill, index) => <li key={index}>{skill}</li>)

    return (
      <>
        <ul>{skillItems}</ul>
        <Buttons index={skills.id} text="Edit" onClick={onClick}/>
      </>
    )
  }
}