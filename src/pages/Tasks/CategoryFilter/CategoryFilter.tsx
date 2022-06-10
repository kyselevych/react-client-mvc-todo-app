import React, {ChangeEventHandler} from 'react';
import {Formik} from "formik";

import {Space, Field, Button} from "components";

import {useTypedSelector} from "hooks/useTypedSelector";

import './categoryFilter.scss';
import {useDispatch} from "react-redux";
import {showAllTasks, showTasksByCategoryId} from "store/actions/filterTasksActions";

interface FormValues {
    categoryId: string | null
}

function CategoryFilter() {
    const dispatch = useDispatch();
    const currentFilterCategoryId = useTypedSelector(state => state.filteredTasks.categoryId);
    const categories = useTypedSelector(state => state.categories.categories);

    const onSubmit = (values: FormValues) => {
        const {categoryId} = values;

        if (categoryId === "" || categoryId === undefined || categoryId === null) {
            dispatch(showAllTasks());
            return;
        }

        dispatch(showTasksByCategoryId(parseInt(categoryId)));
    }

    return (
        <Formik<FormValues>
            initialValues={{
                categoryId: null
            }}
            onSubmit={onSubmit}
        >
            {props => (
                <form className="category-filter-form" onSubmit={props.handleSubmit}>
                    <Space direction="horizontal" style={{justifyContent: "center"}}>
                        <Field>
                            <select
                                name="categoryId"
                                placeholder="Category"
                                className="field"
                                onChange={props.handleChange}
                                value={props.values.categoryId ?? undefined}
                                defaultValue={currentFilterCategoryId ?? undefined}
                            >
                                <option value="">All</option>
                                {categories.map(category =>
                                    <option key={category.id} value={category.id}>{category.name}</option>
                                )}
                            </select>
                        </Field>
                        <Button type="submit">Filter</Button>
                    </Space>
                </form>
            )}
        </Formik>

    );
}

export default CategoryFilter;