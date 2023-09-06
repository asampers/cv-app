/* eslint-disable react/prop-types */
import { Fragment } from "react";
import { Buttons } from "./Buttons";
import { formatDate } from "./helperFunctions";

function ExperienceInfo({data, onClick, showBtn}) {
  const anyData = Object.keys(data).length > 1;
  
  if(anyData) {
  return (
    <Fragment>
      <div className="d-flex w-100 mb-2">
        <div className="d-flex flex-column me-auto">
          <span><b>{data.title}</b>, <i>{data.company}</i></span>
          {data.duties && <span className=''>{data.duties}</span> }
        </div>
        <span className="date-range mt-auto mb-auto">{formatDate(data.startDate)} - {formatDate(data.endDate)}</span>
        {showBtn && <Buttons dataIndex={data.id} text="Edit" onClick={onClick}/> }
      </div>    
    </Fragment>
  )
  }
}

export { ExperienceInfo };