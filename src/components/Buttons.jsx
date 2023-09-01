/* eslint-disable react/prop-types */
export function Buttons({text, onClick, index}) {
  let icon = text.startsWith("Add") ? <ion-icon name="add-outline"></ion-icon> : <ion-icon name="create-outline"></ion-icon>
  let style = text.startsWith("Add") ? "btn-info" : "btn-success";    
  if (text.startsWith("Delete")) {
      style = "btn-danger";
      icon = <ion-icon name="trash-outline"></ion-icon>
  }
  if (text.startsWith("Cancel")) icon = text
  return (    
        <button data-index={index} className={`btn ${style} btn-sm align-self-center ms-2`} onClick={onClick}>
              {icon}
        </button> 
  )       
}