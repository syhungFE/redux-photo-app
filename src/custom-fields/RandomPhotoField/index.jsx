import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Label } from 'reactstrap'
import RandomPhoto from 'custom-fields/RandomPhoto'

RandomPhotoField.propTypes = {
    field : PropTypes.object.isRequired,
    form : PropTypes.object.isRequired,
    
    label : PropTypes.string
}

RandomPhotoField.defaultProps = {
    label : ''
}
function RandomPhotoField(props) {
    const {label , form, field } = props;
    const {name,value,onBlur} = field;
    const {errors, touched} = form;
    const showError = errors[name] && touched[name]
                        ? errors[name] : null;
    const handleImageUrlChange = (newImageUrl) => {
        form.setFieldValue(name, newImageUrl);
    }
    return(
        <FormGroup>
            { label ?? <Label for={name}>{label}</Label>}
            <RandomPhoto
                name ={name}
                imageUrl={value}
                onchangeImageUrl={handleImageUrlChange}
                onRandomButtonBlur={onBlur}
                errors = {showError}
            />
        </FormGroup>
    );
}

export default RandomPhotoField