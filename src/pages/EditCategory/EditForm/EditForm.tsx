import React from "react";
import {Formik, Form} from 'formik';
import * as Yup from "yup";

import Box from "components/Box/Box";
import Space from "components/Space/Space";
import Field from "components/Field/Field";
import Button from "components/Button/Button";
import ErrorSpan from "components/ErrorSpan/ErrorSpan";

interface Category {
    name: string
}

const EditCategorySchema = Yup.object().shape({
    name: Yup.string()
        .required('Required')
});

function EditForm() {
    function onSubmit(values: Category) {
        console.log(values)
    }

    return (
        <Box>
            <h2>Edit category</h2>
            <Formik<Category>
                initialValues={{
                    name: ''
                }}
                onSubmit={onSubmit}
                validationSchema={EditCategorySchema}
            >
                {props => (
                    <Form>
                        <Space direction="horizontal" style={{alignItems: "end"}} >
                            <Field label="Name" style={{width: "85%"}}>
                                <input
                                    name="name"
                                    onChange={props.handleChange}
                                    value={props.values.name}
                                />
                                <ErrorSpan>{props.errors.name}</ErrorSpan>
                            </Field>
                            <Button
                                type="submit"
                                style={{marginBottom: "15px", width: "15%"}}
                            >Save</Button>
                        </Space>
                    </Form>
                )}
            </Formik>
        </Box>
    );
}

export default EditForm;