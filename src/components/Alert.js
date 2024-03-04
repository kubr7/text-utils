import React from 'react'

function Alert(props) {
     const capatalize = (word) => {
          const lower = word.toLowerCase();  
          return lower.charAt(0).toUpperCase() + lower.slice(1);
     }

     let alertStyle = {
          fontSize: '14px',
          fontWeight: '600',
          width: '80%',
          height: '2rem',
          display: "flex",
          alignItems: 'center',
          justifyContent: 'center',
     }


     return (

          props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show text-center mb-0 rounded-0 p-0`} style={alertStyle} role="alert">
               <p className='alertNotify mx-0 my-0'><strong>{capatalize(props.alert.type)}</strong> : {props.alert.msg}</p>
          </div>
     )
}

export default Alert
