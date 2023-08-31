/* eslint-disable react/prop-types */
export function Buttons({text, onClick, index}) {
  let style = text.startsWith("Add") ? "btn-info" : "btn-success";    
  if (text.startsWith("Delete")) style = "btn-danger";
  return (    
        <button data-index={index} className={`btn ${style} btn-sm align-self-center ms-2`} onClick={onClick}>
              {text}
        </button> 
  )       
}