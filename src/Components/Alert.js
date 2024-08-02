import React from 'react'

export default function Alert(props){
    
     
    return (
        props.alert && <div>
<div className='alert-container'>
<div class="alert alert-success alert-dismissible fade show" role="alert">
  <strong>{props.alert.msg}</strong><strong>     {props.alert.type}</strong>
</div>
</div>
</div>
    )
}
