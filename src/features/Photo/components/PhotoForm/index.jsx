import PropTypes from "prop-types";
import React from "react";
import { Button, FormGroup, Spinner } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import { Formik, Form, FastField } from "formik";
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";
import RandomPhotoField from "custom-fields/RandomPhotoField";
import * as Yup from 'yup'

PhotoForm.propTypes = {
  initialState: PropTypes.object.isRequired,
  onSubmit: PropTypes.func,
  isAddMode: PropTypes.bool
};

PhotoForm.defaultProps = {
  initialState: {},
  onSubmit: null,
  isAddMode: true
};

function PhotoForm(props) {
  // npm i --save react-select
  const { initialState,onSubmit,isAddMode} = props;
  const validationSchema = Yup.object().shape({
    title: Yup.string().required('This field is required'),
    categoryId: Yup.number().required('This field is required').nullable(),
    photo: Yup.string().when('categoryId',{
      is: 1,
      then: Yup.string().required('This field is required'),
      otherwise:Yup.string().notRequired()
    }),
  })
  return (
    <Formik
    enableReinitialize
    initialValues={initialState}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      onSubmit(values);
    }}
    >
      {(formikProps) => {
        // do something here ...
        {/* const { values, errors, touched, isSubmitting } = formikProps; */}
        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: Wow nature ..."
            />

            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

           <FastField
             name="photo"
             component={RandomPhotoField}
             label = "Photo"
           />

            <FormGroup>
              <Button type="submit" color={isAddMode ? "primary" : "success"}>
                {isAddMode ? 'Add New Photo' : 'Update Photo' }
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
