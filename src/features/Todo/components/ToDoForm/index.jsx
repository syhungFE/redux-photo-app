import InputField from "custom-fields/InputField";
import { Field, Form, Formik } from "formik"
import React, { useState } from "react"
import Button from "reactstrap/lib/Button";
import FormGroup from "reactstrap/lib/FormGroup";

function ToDoForm(){
    const [initialValues ,setInitialValues] = useState({
        title:""
    });
    const handleSubmit = (values) => { 
        console.log(values);
    }
    return(
        <div className="todo-form_add">
            <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                    handleSubmit(values)
                }}
            >
                {(formikProps) => {
                    return(
                        <Form>
                            <Field 
                                name="title" 
                                label="Title"
                                placeholder="Fill your Task that you want to do."
                                component={InputField}
                            />
                            <FormGroup>
                                <Button type="submit" color="primary">
                                    Add new Task
                                </Button>
                            </FormGroup>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}
export default ToDoForm