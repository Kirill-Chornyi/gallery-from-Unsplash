import {SquareItem} from '../../components';
import React, { useState, useEffect } from 'react';

export function Tile(props) {
    const [tileItem, setTileItem] = useState([]);
    let i=0;
    useEffect(()=>{
        console.log(props.item)
        if (props.item === null || props.item === undefined) {setTileItem([])}
        else {console.log("1" + JSON.stringify(props.item[1].created_at))
            setTileItem(props.item);
            }})
  return (
    <div className='tile-container'>
        {tileItem.map(photo => (
            i++,
        <SquareItem src={photo.urls.small} photoBy={photo.user.first_name} fullSize={photo.urls.full} 
        profPhoto={photo.user.profile_image.medium} bio={photo.user.bio} profLink={photo.user.links.html}  localId={i}/>)
        )}
    </div>
  )
}
