import '../styles/Skills.css';
import { SkillsForm } from './SkillsForm';
import { SkillsInfo } from './SkillsInfo';
import { Data } from './Data';
import { Buttons } from './Buttons';

function Skills() {
  const item = Data();
  const skills = item.data[0];
  
  return (
    <>
      <div className='d-flex align-items-center'>
        <h3>Skills</h3>
        {!item.showForm && <Buttons text={item.noData ? "Add" : "Edit"} onClick={item.toggleShowForm}/> }
      </div>
      {item.showForm ? < SkillsForm data={skills} onSubmit={item.handleSubmit} onDelete={item.handleDelete}  /> : <SkillsInfo skills={skills} />}
    </>
  )
}

export { Skills };