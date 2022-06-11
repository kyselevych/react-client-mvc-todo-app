export interface CategoryState {
    categories: Category[],
    nextCreateCategoryId: number
}

// Actions

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


// Types

export type Category = {
    id: number,
    name: string
}

export type CreateCategoryInput = {
    name: string
}

export type EditCategoryInput = {
    id: number
    name: string
}

export type CategoryAction =
    CreateCategoryAction
    | DeleteCategoryAction
    | EditCategoryAction;