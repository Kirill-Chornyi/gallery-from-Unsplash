import {ListItem} from '../../components';
import React, { useState, useEffect } from 'react';

export function List(props) {
    const [listItem, setListItem] = useState([]);
    let i=0;
    useEffect(()=>{
        console.log(props.item)
        if (props.item === null || props.item === undefined) {setListItem([])}
        else {console.log("1" + JSON.stringify(props.item[1].created_at))
            setListItem(props.item);
            }})
  return (
    <div className='list-container'>
        {listItem.map(photo => (
            i++,
        <ListItem src={photo.urls.small} photoBy={photo.user.first_name} fullSize={photo.urls.full} createdAt={photo.created_at}
        profPhoto={photo.user.profile_image.medium} bio={photo.user.bio} profLink={photo.user.links.html}  localId={i}/>)
        )}
    </div>
  )
}
