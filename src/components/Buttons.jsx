// eslint-disable-next-line react/prop-types
export function Buttons({text, onClick}) {
  let style = text === "Add" ? "btn-info" : "btn-success"     
  
  return (    
        <button className={`btn ${style} btn-sm ms-2`} onClick={onClick}>
              {text}
        </button> 
  )       
}