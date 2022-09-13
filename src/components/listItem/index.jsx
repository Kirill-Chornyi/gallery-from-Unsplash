import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import {Photo} from '../../components';

export function ListItem(props) {
 
  const [date, setDate] = useState();

  useEffect (() => {
    setDate(props.createdAt)
  })

  return (
    <div className='list-item'>
        <div className="list-item__photo"><Photo src={props.src} localId={props.localId}/></div>
        <div className="list-item__bio">created at {date}</div>
        <div className="list-item__title">Photo by {props.photoBy}</div>

        <div className="modal fade" id={props.localId} data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel"> {"<<"} To go back, click outside the modal</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <img width="100%" src={props.fullSize}/>
            </div>
            <div className="modal-footer">
              <div className=""> {props.bio} </div>
              <div className="photoBy">
              <img className="profPhoto" src={props.profPhoto}/> <a href={props.profLink}> Photo by {props.photoBy} </a> </div>
              
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}
