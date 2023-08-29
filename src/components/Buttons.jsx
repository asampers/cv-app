/* eslint-disable react/prop-types */
export function Buttons({text, onClick, index}) {
  let style = text.startsWith("Add") ? "btn-info" : "btn-success"     
  
  return (    
        <button data-index={index} className={`btn ${style} btn-sm ms-2`} onClick={onClick}>
              {text}
        </button> 
  )       
}