import {
    CategoryActionTypes,
    CreateCategoryAction,
    DeleteCategoryAction,
    EditCategoryAction
} from "store/types/categoryTypes";

import type {CreateCategoryInput, EditCategoryInput} from "models/categoryModels";

export const categoryActionCreators = {
    createCategory: (payload: CreateCategoryInput): CreateCategoryAction => {
        return {type: CategoryActionTypes.CREATE_CATEGORY, payload}
    },
    deleteCategory: (payload: number): DeleteCategoryAction => {
        return {type: CategoryActionTypes.DELETE_CATEGORY, payload}
    },
    editCategory: (payload: EditCategoryInput): EditCategoryAction => {
        return {type: CategoryActionTypes.EDIT_CATEGORY, payload}
    }
}