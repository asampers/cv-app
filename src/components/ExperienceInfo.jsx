/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { Buttons } from "./Buttons";
import { formatDate } from "./helperFunctions";

function ExperienceInfo({data, onClick}) {
  const anyData = Object.keys(data).length > 1;
  
  if(anyData) {
  return (
    <Fragment>
    <div className='d-flex align-items-center mt-2'>
      <div>
        {data.title && <span><b>{data.title}</b>, <i>{data.company}</i></span>}
        {data.startDate && <p className='me-3'>{formatDate(data.startDate)} - {formatDate(data.endDate)}</p> }
      </div>    
          {data.duties && <p className='me-3'>Responsibilities: {data.duties}</p> }
          <Buttons index={data.id} text="Edit" onClick={onClick}/>
        </div>
        <div className='d-flex align-items-center'>
          
        </div>
    </Fragment>
  )
  }
}

export { ExperienceInfo };