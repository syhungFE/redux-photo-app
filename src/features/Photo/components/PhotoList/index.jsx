import React from 'react'
import PropTypes from 'prop-types'
import { Col, Row } from 'reactstrap';
import PhotoCard from '../PhotoCard';
PhotoList.propTypes = {
    photoList: PropTypes.array,
    onEditClick: PropTypes.func,
    onRemoveClick: PropTypes.func
}

PhotoList.defaultProps = {
    photoList: [],
    onEditClick: null,
    onRemoveClick: null
}

function PhotoList(props){
    const {photoList,onPhotoEditClick,onPhotoRemoveClick,onPhotoLikeClick} = props;
    return(
        <Row>
            {
                photoList.map((photo) => (
                    <Col key={photo.id} xs="12" md="6" lg="3">
                        {
                            <PhotoCard 
                                photo={photo}
                                onEditClick={onPhotoEditClick} 
                                onRemoveClick={onPhotoRemoveClick}
                                onLikeClick={onPhotoLikeClick}
                            />
                        }
                    </Col>
                ))
            }
        </Row>
    )
}

export default PhotoList;