import ModalCustom from "components/Modal";
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import "./style.scss"

function PhotoLike(props){
    const {onDisLikeClick} = props;
    const photoLikeList = useSelector(state => {
        return state.photos.filter(photo => photo.like === true)
    })    
    const handleDisLikeClick = (photo) => {
        
        if(onDisLikeClick){
            const updatedPhoto = {
                ...photo,
                like : false
            }
            
            onDisLikeClick(updatedPhoto);
        }
    }
    return (
        <ul className="photo-like-list">
            {
                photoLikeList.map((photo,index) => {
                    return (
                        <li key={photo.id} className="d-flex justify-content-between m-2"> 
                            <h4> {photo.title} </h4>
                            <Button size='sm' color='danger' onClick={() => handleDisLikeClick(photo)}>
                                Dislike
                            </Button>
                        </li>
                    )
                }) 
            }
        </ul>
    )
}

export default PhotoLike