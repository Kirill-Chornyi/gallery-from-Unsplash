import React, { useState, useEffect } from 'react';
const bootstrap = require('bootstrap')


export function Photo(props) {

    function modalShow() {
        let myModal = new bootstrap.Modal(document.getElementById(props.localId), {
            keyboard: false
          })
          myModal.show()
    }

  return (
    <div className='photo' onClick={()=>{modalShow()}} data-toggle="modal" data-target="#staticBackdrop">
      <img src={props.src} alt="" srcset="" />
      
      
    </div>
  )
}
