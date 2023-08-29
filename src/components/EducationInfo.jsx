/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { Fragment } from "react";
import { Buttons } from "./Buttons";

function EducationInfo({data, onClick, index}) {

  if(Object.keys(data).length > 0) {
  return (
    <Fragment>
    <div className='d-flex align-items-center mt-2'>
          {data.school && <p className='me-3'>School/University: {data.school}</p>}
          {data.degree && <p className='me-3'>Degree type: {data.degree}</p> }
          {data.major && <p className='me-3'>Major: {data.major}</p> }
          {data.minor && <p className='me-3'>Minor: {data.minor}</p> }
          {data.startDate && <p className='me-3'>From: {data.startDate}</p> }
          {data.endDate && <p className='me-3'>To: {data.endDate}</p> }
          <Buttons index={index} text="Edit" onClick={onClick}/>
        </div>
        <div className='d-flex align-items-center'>
          
        </div>
    </Fragment>
  )
  }
}

export { EducationInfo };