import {
    CategoryActionTypes,
    CreateCategoryAction,
    CreateCategoryFailureAction,
    CreateCategorySuccessAction,
    DeleteCategoryAction,
    DeleteCategoryFailureAction,
    DeleteCategorySuccessAction,
    EditCategoryAction,
    EditCategoryFailureAction,
    EditCategorySuccessAction,
    FetchCategoriesAction,
    FetchCategoriesFailureAction,
    FetchCategoriesSuccessAction
} from "store/types/categoryTypes";

import type {Category, CreateCategoryInput, EditCategoryInput} from "models/categoryModels";

export const categoryActionCreators = {
    fetchCategories: (payload?: undefined): FetchCategoriesAction => {
        return {type: CategoryActionTypes.FETCH_CATEGORIES, payload};
    },
    fetchCategoriesSuccess: (payload: Category[]): FetchCategoriesSuccessAction => {
        return {type: CategoryActionTypes.FETCH_CATEGORIES_SUCCESS, payload};
    },
    fetchCategoriesFailure: (payload: string): FetchCategoriesFailureAction => {
        return {type: CategoryActionTypes.FETCH_CATEGORIES_FAILURE, payload};
    },

    createCategory: (payload: CreateCategoryInput): CreateCategoryAction => {
        return {type: CategoryActionTypes.CREATE_CATEGORY, payload}
    },
    createCategorySuccess: (payload: Category): CreateCategorySuccessAction => {
        return {type: CategoryActionTypes.CREATE_CATEGORY_SUCCESS, payload}
    },
    createCategoryFailure: (payload: string): CreateCategoryFailureAction => {
        return {type: CategoryActionTypes.CREATE_CATEGORY_FAILURE, payload}
    },

    editCategory: (payload: EditCategoryInput): EditCategoryAction => {
        return {type: CategoryActionTypes.EDIT_CATEGORY, payload}
    },
    editCategorySuccess: (payload: Category): EditCategorySuccessAction => {
        return {type: CategoryActionTypes.EDIT_CATEGORY_SUCCESS, payload}
    },
    editCategoryFailure: (payload: string): EditCategoryFailureAction => {
        return {type: CategoryActionTypes.EDIT_CATEGORY_FAILURE, payload}
    },

    deleteCategory: (payload: number): DeleteCategoryAction => {
        return {type: CategoryActionTypes.DELETE_CATEGORY, payload}
    },
    deleteCategorySuccess: (payload: number): DeleteCategorySuccessAction => {
        return {type: CategoryActionTypes.DELETE_CATEGORY_SUCCESS, payload}
    },
    deleteCategoryFailure: (payload: string): DeleteCategoryFailureAction => {
        return {type: CategoryActionTypes.DELETE_CATEGORY_FAILURE, payload}
    }
}