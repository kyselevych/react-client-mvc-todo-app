import React from "react";
import * as Yup from "yup";
import {Formik, Form} from 'formik';
import {Box, Space, Field, Button, ErrorSpan} from "components";

import {useActions} from "hooks/useActions";
import {CreateCategoryInput} from "models/categoryModels";

const CreateCategorySchema = Yup.object().shape({
    name: Yup.string()
        .required('Required')
});

function CreateCategory() {
    const {createCategory} = useActions();

    const onSubmit = (values: CreateCategoryInput, resetForm: { resetForm: () => void; }): void => {
        createCategory(values);
        resetForm.resetForm();
    }

    return (
        <Box>
            <h2>Create category</h2>
            <Formik<CreateCategoryInput>
                initialValues={{
                    name: ''
                }}
                onSubmit={onSubmit}
                validationSchema={CreateCategorySchema}
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
                            >Create</Button>
                        </Space>
                    </Form>
                )}
            </Formik>
        </Box>
    );
}

export default CreateCategory;