import {
    CategoryActionTypes,
    CreateCategoryAction,
    EditCategoryAction,
    FetchCategoriesAction,
    PutCategoriesAction,
    RemovalCategoryAction,
    SetCategoriesAction,
    RemoveCategoryAction,
    UpdateCategoryAction
} from "store/types/category.types";

import type {Category, CreateCategoryInput, EditCategoryInput} from "models/categoryModels";

export const categoryActionCreators = {
    setCategories: (payload: Category[]): SetCategoriesAction => {
        return {type: CategoryActionTypes.SET_CATEGORIES, payload};
    },
    putCategory: (payload: Category): PutCategoriesAction => {
        return {type: CategoryActionTypes.PUT_CATEGORY, payload};
    },
    removeCategory: (payload: number): RemoveCategoryAction => {
        return {type: CategoryActionTypes.REMOVE_CATEGORY, payload};
    },
    updateCategory: (payload: Category): UpdateCategoryAction => {
        return {type: CategoryActionTypes.UPDATE_CATEGORY, payload};
    },

    fetchCategories: (): FetchCategoriesAction => {
        return {type: CategoryActionTypes.FETCH_CATEGORIES};
    },
    createCategory: (payload: CreateCategoryInput): CreateCategoryAction => {
        return {type: CategoryActionTypes.CREATE_CATEGORY, payload}
    },
    editCategory: (payload: EditCategoryInput): EditCategoryAction => {
        return {type: CategoryActionTypes.EDIT_CATEGORY, payload}
    },
    removalCategory: (payload: number): RemovalCategoryAction => {
        return {type: CategoryActionTypes.REMOVAL_CATEGORY, payload}
    }
}