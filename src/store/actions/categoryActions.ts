import {
    CategoryActionTypes,
    CreateCategoryAction,
    CreateCategoryInput,
    DeleteCategoryAction,
    EditCategoryAction,
    EditCategoryInput
} from "types/categoryTypes";

export const createCategory = (payload: CreateCategoryInput): CreateCategoryAction => {
    return {type: CategoryActionTypes.CREATE_CATEGORY, payload}
}

export const deleteCategory = (payload: number): DeleteCategoryAction => {
    return {type: CategoryActionTypes.DELETE_CATEGORY, payload}
}

export const editCategory = (payload: EditCategoryInput): EditCategoryAction => {
    return {type: CategoryActionTypes.EDIT_CATEGORY, payload}
}