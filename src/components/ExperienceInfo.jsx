/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { Buttons } from "./Buttons";

function ExperienceInfo({data, onClick}) {
  const anyData = Object.keys(data).length > 1;
  
  if(anyData) {
  return (
    <Fragment>
    <div className='d-flex align-items-center mt-2'>
          {data.title && <p className='me-3'>Job title: {data.title}</p>}
          {data.company && <p className='me-3'>Company: {data.company}</p> }
          {data.duties && <p className='me-3'>Responsibilities: {data.duties}</p> }
          {data.startDate && <p className='me-3'>From: {data.startDate}</p> }
          {data.endDate && <p className='me-3'>To: {data.endDate}</p> }
          <Buttons index={data.id} text="Edit" onClick={onClick}/>
        </div>
        <div className='d-flex align-items-center'>
          
        </div>
    </Fragment>
  )
  }
}

export { ExperienceInfo };