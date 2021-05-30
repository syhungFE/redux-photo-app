import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";

PhotoCard.propTypes = {
    photo: PropTypes.object.isRequired,
    onEditClick: PropTypes.func,
    onRemoveClick: PropTypes.func,
}

PhotoCard.defaultProps = {
    photo: {},
    onEditClick: null,
    onRemoveClick: null,
}
function PhotoCard(props){
    const { photo, onEditClick, onRemoveClick, onLikeClick} = props;
    const [likeToggle, setLikeToggle] = useState();
    useEffect(() => {
        setLikeToggle(photo.like);
    },[photo])
    const handleEditClick =() => {
        if (onEditClick){
            onEditClick(photo)
        }
    }
    const handleRemoveClick =() => {
        if (onRemoveClick){
            onRemoveClick(photo)
        }
    }
    const handleLikeClick =() => {
        setLikeToggle(!likeToggle);
        if(onLikeClick){
            const newPhoto = {
                ...photo,
                like: !likeToggle
            }
            onLikeClick(newPhoto);
        }
    }
    return(
        <div className = "photo">
            <img src={photo.photo} alt=""/>
            <div className="photo__overlay">
                <span className="heart" onClick={handleLikeClick}>
                    <FontAwesomeIcon icon={faHeart} color={likeToggle ? "red" : ""}/>
                </span>
                <h3 className="photo__title">{photo.title}</h3>
                <div className="photo__actions">
                    <div>
                        <Button outline size='sm' color='light' onClick={handleEditClick}>
                            Edit
                        </Button>
                    </div>
                    <div>
                        <Button outline size='sm' color='danger' onClick={handleRemoveClick}>
                            Remove
                        </Button>
                    </div>                                        
                </div>
            </div>
        </div>
    )
}

export default PhotoCard;