import PropTypes from 'prop-types';
export function Buttons({text, onClick, dataIndex}) {
  
  let icon;
  switch (text) {
      case 'Add':
            icon = <ion-icon name="add-outline"></ion-icon>;
            break
      case 'Edit':
            icon = <ion-icon name="create-outline"></ion-icon>;
            break
      case 'Delete':
            icon = <ion-icon name="trash-outline"></ion-icon>;
            break
      case  'Cancel':
            icon = 'Cancel';
  }
  return (    
        <button data-index={dataIndex} className={`btn ${text} btn-sm align-self-center ms-2`} onClick={onClick}>
              {icon}
        </button> 
  )       
}

Buttons.propTypes = {
      text: PropTypes.string,
      onClick: PropTypes.func,
      dataIndex: PropTypes.string,
}