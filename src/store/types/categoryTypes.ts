import type {Category, CreateCategoryInput, EditCategoryInput} from "models/categoryModels";

import {StateDetails} from './index';

export type CategoryState = {
    categories: Category[],
    fetchCategories: StateDetails,
    createCategory: StateDetails,
    editCategory: StateDetails,
    deleteCategory: StateDetails
}

export enum CategoryActionTypes {
    FETCH_CATEGORIES = "FETCH_CATEGORIES",
    FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS",
    FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE",
    CREATE_CATEGORY = "CREATE_CATEGORY",
    CREATE_CATEGORY_SUCCESS = "CREATE_CATEGORY_SUCCESS",
    CREATE_CATEGORY_FAILURE = "CREATE_CATEGORY_FAILURE",
    EDIT_CATEGORY = "EDIT_CATEGORY",
    EDIT_CATEGORY_SUCCESS = "EDIT_CATEGORY_SUCCESS",
    EDIT_CATEGORY_FAILURE = "EDIT_CATEGORY_FAILURE",
    DELETE_CATEGORY = "DELETE_CATEGORY",
    DELETE_CATEGORY_SUCCESS = "DELETE_CATEGORY_SUCCESS",
    DELETE_CATEGORY_FAILURE = "DELETE_CATEGORY_FAILURE",
}

// Actions

export type FetchCategoriesAction = {
    type: CategoryActionTypes.FETCH_CATEGORIES,
    payload: undefined
}

export type FetchCategoriesSuccessAction = {
    type: CategoryActionTypes.FETCH_CATEGORIES_SUCCESS,
    payload: Category[]
}

export type FetchCategoriesFailureAction = {
    type: CategoryActionTypes.FETCH_CATEGORIES_FAILURE,
    payload: string
}

export type CreateCategoryAction = {
    type: CategoryActionTypes.CREATE_CATEGORY,
    payload: CreateCategoryInput
}

export type CreateCategorySuccessAction = {
    type: CategoryActionTypes.CREATE_CATEGORY_SUCCESS,
    payload: Category
}

export type CreateCategoryFailureAction = {
    type: CategoryActionTypes.CREATE_CATEGORY_FAILURE,
    payload: string
}

export type DeleteCategoryAction = {
    type: CategoryActionTypes.DELETE_CATEGORY,
    payload: number
}

export type DeleteCategorySuccessAction = {
    type: CategoryActionTypes.DELETE_CATEGORY_SUCCESS,
    payload: number
}

export type DeleteCategoryFailureAction = {
    type: CategoryActionTypes.DELETE_CATEGORY_FAILURE,
    payload: string
}

export type EditCategoryAction = {
    type: CategoryActionTypes.EDIT_CATEGORY,
    payload: EditCategoryInput
}

export type EditCategorySuccessAction = {
    type: CategoryActionTypes.EDIT_CATEGORY_SUCCESS,
    payload: Category
}

export type EditCategoryFailureAction = {
    type: CategoryActionTypes.EDIT_CATEGORY_FAILURE,
    payload: string
}

export type CategoryAction =
    | FetchCategoriesAction
    | FetchCategoriesSuccessAction
    | FetchCategoriesFailureAction

    | CreateCategoryAction
    | CreateCategorySuccessAction
    | CreateCategoryFailureAction

    | EditCategoryAction
    | EditCategorySuccessAction
    | EditCategoryFailureAction

    | DeleteCategoryAction
    | DeleteCategorySuccessAction
    | DeleteCategoryFailureAction
    ;