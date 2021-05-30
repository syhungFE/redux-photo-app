import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap'
import { ErrorMessage } from 'formik'

InputField.propTypes = {
    form : PropTypes.object.isRequired,
    field : PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disable: PropTypes.bool
}

InputField.defaultProps={
    type: 'text',
    label: '',
    placeholder: '',
    disable: false
}
function InputField(props) {
    // eslint-disable-next-line no-unused-vars
    const {form,field,placeholder,label,type,disable} = props;
    // eslint-disable-next-line no-unused-vars
    const {name} = field;
    const{ errors, touched} = form;
    
    const showError = errors[name] && touched[name];
    return(
        <FormGroup>
            {label && <Label for={name}>{label}</Label>}
            <Input 
                id={name}  
                // name={name} 
                // value={value}
                // onChange={onChange}
                // onBlur={onBlur}
                {...field}

                type={type}
                placeholder={placeholder}
                disabled={disable}
                invalid={showError}
            />
            <ErrorMessage name={name} component={FormFeedback}></ErrorMessage>
        </FormGroup>
    )
}

export default InputField