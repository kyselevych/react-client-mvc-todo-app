import React from "react";
import {Formik, Form} from 'formik';
import * as Yup from "yup";

import {useDispatch} from "react-redux";
import {useTypedSelector} from "hooks/useTypedSelector";
import {createTask} from "store/actions/taskActions";
import {CreateTaskInput} from "types/taskTypes";

import {Box, Space, Field, Button, ErrorSpan} from "components";

const CreateTaskSchema = Yup.object().shape({
    name: Yup.string()
        .required('Required'),
    categoryId: Yup.number().typeError('Value must be a number'),
    deadline: Yup.date()
});

interface FormValues {
    name: string,
    categoryId: string,
    deadline: string,
}

function CreateTask() {
    const dispatch = useDispatch();
    const categories = useTypedSelector(state => state.categories.categories);

    function onSubmit(values: FormValues, resetForm: { resetForm: () => void; }) {
        const parsedCategoryId = parseInt(values.categoryId);

        const createTaskInput: CreateTaskInput = {
            name: values.name,
            deadline: values.deadline,
            categoryId: parsedCategoryId,
            category: isNaN(parsedCategoryId)
                ? null
                : categories.find(category => category.id === parsedCategoryId)!
        }

        dispatch(createTask(createTaskInput));
        resetForm.resetForm();
    }

    return (
        <Box>
            <h2>Create task</h2>
            <Formik<FormValues>
                initialValues={{
                    name: '',
                    categoryId: '',
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
                                <select
                                    name="categoryId"
                                    onChange={props.handleChange}
                                    value={props.values.categoryId}
                                >
                                    <option value="">None</option>
                                    {categories?.map(category =>
                                        <option value={category.id} key={category.id}>{category.name}</option>
                                    )}
                                </select>
                                <ErrorSpan>{props.errors.categoryId}</ErrorSpan>
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