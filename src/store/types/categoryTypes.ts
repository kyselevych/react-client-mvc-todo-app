import type {Category, CreateCategoryInput, EditCategoryInput} from "models/categoryModels";

export interface CategoryState {
    categories: Category[],
    nextCreateCategoryId: number
}

export enum CategoryActionTypes {
    CREATE_CATEGORY = "CREATE_CATEGORY",
    DELETE_CATEGORY = "DELETE_CATEGORY",
    EDIT_CATEGORY = "EDIT_CATEGORY",
}

export interface CreateCategoryAction {
    type: CategoryActionTypes.CREATE_CATEGORY,
    payload: CreateCategoryInput
}

export interface DeleteCategoryAction {
    type: CategoryActionTypes.DELETE_CATEGORY,
    payload: number
}

export interface EditCategoryAction {
    type: CategoryActionTypes.EDIT_CATEGORY,
    payload: EditCategoryInput
}

export type CategoryAction =
    CreateCategoryAction
    | DeleteCategoryAction
    | EditCategoryAction;