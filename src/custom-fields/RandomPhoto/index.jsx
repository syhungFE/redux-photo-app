import React from 'react'
import PropTypes from 'prop-types'
import { Button, FormGroup, Label } from 'reactstrap'
import './style.scss'

RandomPhoto.propTypes = {
    name :PropTypes.string,
    imageUrl: PropTypes.string,
    onchangeImageUrl: PropTypes.func,
    onRandomButtonBlur: PropTypes.func
}

RandomPhoto.defaultProps = {
    name :'',
    imageUrl: '',
    onchangeImageUrl: null,
    onRandomButtonBlur: null
}
function getRandomImageUrl() { 
    const randomId = Math.trunc(Math.random() * 2000);
    return `https://picsum.photos/id/${randomId}/300/300`;
}
function RandomPhoto(props){
    const { name, imageUrl, onchangeImageUrl, onRandomButtonBlur, errors} = props;
    const handleRandomPhotoClick = () => {
        if(onchangeImageUrl){
            const randomImageUrl = getRandomImageUrl();
            onchangeImageUrl(randomImageUrl);
        } 
    }
    return (
        <div className="random-photo">
            <div className="random-photo__button">
                <Button 
                    type="button" 
                    outline 
                    name={name}
                    color="primary"
                    onBlur={onRandomButtonBlur}
                    onClick={handleRandomPhotoClick}
                    >
                    Random a photo
                </Button>
            </div>
            <div className="random-photo__image">        
                {imageUrl && 
                    <img 
                        src={imageUrl} 
                        onError={handleRandomPhotoClick}
                        alt="Ooops ... not found. Please click random again!" 
                    />}  
            </div>
            {
                errors && 
                <div className='invalid-feedback d-block'>{errors}</div>
            }
        </div>
    )
}

export default RandomPhoto