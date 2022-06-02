import React from "react";
import {Formik, Form} from 'formik';
import * as Yup from "yup";

import Box from "components/Box/Box";
import Space from "components/Space/Space";
import Field from "components/Field/Field";
import Button from "components/Button/Button";
import ErrorSpan from "components/ErrorSpan/ErrorSpan";

interface Task {
    name: string,
    category: string,
    deadline: string,
}

const CreateTaskSchema = Yup.object().shape({
    name: Yup.string()
        .required('Required'),
    category: Yup.string(),
    deadline: Yup.date()
});

function CreateTask() {
    function onSubmit(values: Task) {
        console.log(values)
    }

    return (
        <Box>
            <h2>Create task</h2>
            <Formik<Task>
                initialValues={{
                    name: '',
                    category: '',
                    deadline: '',
                }}
                onSubmit={onSubmit}
                validationSchema={CreateTaskSchema}
            >
                {props => (
                    <Form>
                        <Space direction="horizontal" style={{alignItems: "end"}} maxGrow={true}>
                            <Field label="Name">
                                <input
                                    name="name"
                                    onChange={props.handleChange}
                                    value={props.values.name}
                                />
                                <ErrorSpan>{props.errors.name}</ErrorSpan>
                            </Field>
                            <Field label="Category">
                                <input
                                    name="category"
                                    onChange={props.handleChange}
                                    value={props.values.category}
                                />
                                <ErrorSpan>{props.errors.category}</ErrorSpan>
                            </Field>
                            <Field label="Deadline">
                                <input
                                    name="deadline"
                                    type="datetime-local"
                                    onChange={props.handleChange}
                                    value={props.values.deadline}
                                />
                                <ErrorSpan>{props.errors.deadline}</ErrorSpan>
                            </Field>
                            <Button type="submit" style={{marginBottom: "15px"}}>Create</Button>
                        </Space>
                    </Form>
                )}
            </Formik>
        </Box>
    );
}

export default CreateTask;