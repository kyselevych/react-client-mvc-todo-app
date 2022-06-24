import type {Category, CreateCategoryInput, EditCategoryInput} from "models/categoryModels";

export type CategoryState = Category[];

export enum CategoryActionTypes {
    SET_CATEGORIES = "SET_CATEGORIES",
    PUT_CATEGORY = "PUT_CATEGORY",
    UPDATE_CATEGORY = "UPDATE_CATEGORY",
    REMOVE_CATEGORY = "REMOVE_CATEGORY",

    FETCH_CATEGORIES = "FETCH_CATEGORIES",
    CREATE_CATEGORY = "CREATE_CATEGORY",
    EDIT_CATEGORY = "EDIT_CATEGORY",
    REMOVAL_CATEGORY = "REMOVAL_CATEGORY",
}

// Document actions

export type SetCategoriesAction = {
    type: CategoryActionTypes.SET_CATEGORIES,
    payload: Category[]
}

export type PutCategoriesAction = {
    type: CategoryActionTypes.PUT_CATEGORY,
    payload: Category
}

export type UpdateCategoryAction = {
    type: CategoryActionTypes.UPDATE_CATEGORY,
    payload: Category
}

export type RemoveCategoryAction = {
    type: CategoryActionTypes.REMOVE_CATEGORY,
    payload: number
}


// Command actions

export type CreateCategoryAction = {
    type: CategoryActionTypes.CREATE_CATEGORY,
    payload: CreateCategoryInput
}

export type FetchCategoriesAction = {
    type: CategoryActionTypes.FETCH_CATEGORIES
}

export type RemovalCategoryAction = {
    type: CategoryActionTypes.REMOVAL_CATEGORY,
    payload: number
}

export type EditCategoryAction = {
    type: CategoryActionTypes.EDIT_CATEGORY,
    payload: EditCategoryInput
}


export type CategoryAction =
    | SetCategoriesAction
    | UpdateCategoryAction
    | RemoveCategoryAction
    | PutCategoriesAction

    | FetchCategoriesAction
    | CreateCategoryAction
    | EditCategoryAction
    | RemovalCategoryAction
    ;