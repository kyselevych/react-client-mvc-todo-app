import type {Category, CreateCategoryInput, EditCategoryInput} from "models/categoryModels";

export type CategoryState = {
    categories: Category[],
    nextCreateCategoryId: number
}

export enum CategoryActionTypes {
    CREATE_CATEGORY = "CREATE_CATEGORY",
    DELETE_CATEGORY = "DELETE_CATEGORY",
    EDIT_CATEGORY = "EDIT_CATEGORY",
}

export type CreateCategoryAction = {
    type: CategoryActionTypes.CREATE_CATEGORY,
    payload: CreateCategoryInput
}

export type DeleteCategoryAction = {
    type: CategoryActionTypes.DELETE_CATEGORY,
    payload: number
}

export type EditCategoryAction = {
    type: CategoryActionTypes.EDIT_CATEGORY,
    payload: EditCategoryInput
}

export type CategoryAction =
    CreateCategoryAction
    | DeleteCategoryAction
    | EditCategoryAction;