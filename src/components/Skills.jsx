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
      <div className='border-top border-dark d-flex w-100'>
        <h3>Skills</h3>
        {(!item.showForm && item.noData) && <Buttons text="Add" onClick={item.toggleShowForm}/> }
      </div>
      {item.showForm ? < SkillsForm data={skills} onSubmit={item.handleSubmit} onDelete={item.handleDelete}  /> : <SkillsInfo skills={skills} onClick={item.toggleEdit} />}
    </>
  )
}

export { Skills };