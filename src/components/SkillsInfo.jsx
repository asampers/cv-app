/* eslint-disable react/prop-types */
export function SkillsInfo({skills}) {
  if(skills.skills) {
    const skillList = skills.skills.split(',')
    const skillItems = skillList.map((skill, index) => <li key={index}>{skill}</li>)

    return <ul>{skillItems}</ul>;
  }
}