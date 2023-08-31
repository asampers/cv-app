/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { Buttons } from "./Buttons";
import { formatDate } from "./helperFunctions";

function EducationInfo({data, onClick}) {
  const anyData = Object.keys(data).length > 1;
  
  if(anyData) {
  return (
    <Fragment>
      <div className='d-flex'>
        <div className='d-flex flex-column'>  
          {data.degree && <p className='fw-bold'>{data.degree} - {data.major}</p> }
          {data.minor && <span className=''>Minor: {data.minor}</span> }
          {data.school && <p className='fst-italic'>{data.school}</p>}
        </div>  
          {data.startDate && <p className=''>{formatDate(data.startDate)} - {formatDate(data.endDate)}</p> }
          <Buttons index={data.id} text="Edit" onClick={onClick}/>
        </div>
        <div className='d-flex align-items-center'>
          
      </div>
    </Fragment>
  )
  }
}

export { EducationInfo };