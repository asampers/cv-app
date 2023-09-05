/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { Buttons } from "./Buttons";
import { formatDate } from "./helperFunctions";

function EducationInfo({data, onClick, showBtn}) {
  const anyData = Object.keys(data).length > 1;
  
  if(anyData) {
  return (
    <Fragment>
      <div className='d-flex w-100 mb-2'>
        <div className='d-flex flex-column me-auto'>  
          {data.degree && <span className='fw-bold'>{data.degree} Degree - {data.major}</span> }
          {data.minor && <span className=''>Minor: {data.minor}</span> }
          {data.school && <span className='fst-italic'>{data.school}</span>}
        </div> 
          {data.startDate && <span className='mt-auto mb-auto'>{formatDate(data.startDate)} - {formatDate(data.endDate)}</span> }
          {showBtn && <Buttons dataIndex={data.id} text="Edit" onClick={onClick}/> }
      </div>
    </Fragment>
  )
  }
}

export { EducationInfo };