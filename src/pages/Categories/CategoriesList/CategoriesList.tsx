import React, {useState} from 'react';
import * as yup from 'yup';
import {useFormik} from "formik";

import {Table, Box, Space, Button, Field, ErrorSpan} from "components";

import {useTypedSelector} from "hooks/useTypedSelector";

import {EditCategoryInput} from "models/categoryModels";
import {useActions} from "hooks/useActions";

interface EditModeState {
    status: boolean,
    rowId: number | null
}

interface EditCategoryParams {
    id: number,
    name: string
}

interface FormikValues {
    id: string | number,
    name: string
}

const EditTaskSchema = yup.object().shape({
    id: yup.number().required(),
    name: yup.string().required("Field cannot be empty")
});

function CategoriesList() {
    const {deleteCategory, editCategory} = useActions();
    const categories = useTypedSelector(state => state.categories.categories);

    const [editMode, setEditMode] = useState<EditModeState>({status: false, rowId: null});

    const onSubmitEditedCategory = (values: FormikValues) => {
        const editCategoryInput: EditCategoryInput = {
            id: Number(values.id),
            name: values.name
        }

        editCategory(editCategoryInput);
        setEditMode({status: false, rowId: null});
    }

    const onEditCategory = ({id, name}: EditCategoryParams): void => {
        setEditMode({
            status: true,
            rowId: id
        });

        formik.setFieldValue("id", id);
        formik.setFieldValue("name", name);
    }

    const onCancelEditCategory = () => {
        setEditMode({status: false, rowId: null});
    }

    const formik = useFormik<FormikValues>({
        initialValues: {
            id: '',
            name: ''
        },
        onSubmit: onSubmitEditedCategory,
        validationSchema: EditTaskSchema
    })

    const columns = [
        {
            name: "Name",
            width: 70,
            key: 1,
        },
        {
            name: "Action",
            width: 30,
            key: 2
        }
    ];

    return (
        <Box>
            <h2>Categories</h2>
            <Table columns={columns}>
                {categories?.map(category =>
                    <tr key={category.id}>
                        <td>
                            {(editMode.status && editMode.rowId === category.id)
                                ? <form onSubmit={formik.handleSubmit}>
                                    <Field>
                                        <input name={"id"} value={formik.values.id} type={"hidden"}/>
                                        <input
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            name={"name"}
                                        />
                                        {formik.errors.name && <ErrorSpan>{formik.errors.name}</ErrorSpan>}
                                    </Field>
                                </form>
                                : category.name
                            }
                        </td>
                        <td>
                            <Space direction="horizontal">
                                {(editMode.status && editMode.rowId === category.id)
                                    ? <>
                                        <Button
                                            size="small"
                                            styleType="secondary"
                                            type="submit"
                                            onClick={() => formik.submitForm()}
                                        >Save</Button>
                                        <Button
                                            size="small"
                                            styleType="secondary"
                                            onClick={() => onCancelEditCategory()}
                                        >Cancel</Button>
                                    </>
                                    : <>
                                        <Button
                                            size="small"
                                            styleType="secondary"
                                            onClick={() => onEditCategory({id: category.id, name: category.name})}
                                        >Edit</Button>
                                        <Button
                                            size="small"
                                            styleType="secondary"
                                            onClick={() => deleteCategory(category.id)}
                                        >Delete</Button>
                                    </>
                                }
                            </Space>
                        </td>
                    </tr>
                )}
            </Table>
        </Box>
    );
}

export default CategoriesList;