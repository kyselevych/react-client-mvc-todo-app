import {CategoryAction, CategoryActionTypes, CategoryState} from "store/types/categoryTypes";
import {StateStatus} from "../types";

const initialState: CategoryState = {
    categories: [],
    fetchCategories: {
        status: StateStatus.DEFAULT,
        error: null
    },
    createCategory: {
        status: StateStatus.DEFAULT,
        error: null
    },
    editCategory: {
        status: StateStatus.DEFAULT,
        error: null
    },
    deleteCategory: {
        status: StateStatus.DEFAULT,
        error: null
    }
}

export const categoryReducer = (state = initialState, action: CategoryAction): CategoryState => {
    switch (action.type) {
        case CategoryActionTypes.FETCH_CATEGORIES:
            return {...state, fetchCategories: {status: StateStatus.LOADING, error: null}};

        case CategoryActionTypes.FETCH_CATEGORIES_SUCCESS:
            return {...state, categories: action.payload, fetchCategories: {status: StateStatus.SUCCESS, error: null}};

        case CategoryActionTypes.FETCH_CATEGORIES_FAILURE:
            return {...state, categories: [], fetchCategories: {status: StateStatus.FAILURE, error: action.payload}};

        case CategoryActionTypes.CREATE_CATEGORY:
            return {...state, createCategory: {status: StateStatus.LOADING, error: null}};

        case CategoryActionTypes.CREATE_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: [...state.categories, action.payload],
                createCategory: {status: StateStatus.SUCCESS, error: null}
            };

        case CategoryActionTypes.CREATE_CATEGORY_FAILURE:
            return {...state, createCategory: {status: StateStatus.FAILURE, error: action.payload}};

        case CategoryActionTypes.DELETE_CATEGORY:
            return {...state, deleteCategory: {status: StateStatus.LOADING, error: null}};

        case CategoryActionTypes.DELETE_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: [...state.categories.filter(category => category.id !== action.payload)],
                deleteCategory: {status: StateStatus.SUCCESS, error: null}
            }

        case CategoryActionTypes.DELETE_CATEGORY_FAILURE:
            return {...state, deleteCategory: {status: StateStatus.FAILURE, error: action.payload}};

        case CategoryActionTypes.EDIT_CATEGORY:
            return {...state, editCategory: {status: StateStatus.LOADING, error: null}};

        case CategoryActionTypes.EDIT_CATEGORY_SUCCESS:
            return {
                ...state,
                categories: state.categories.map(category => {
                    if (category.id === action.payload.id)
                        return {...action.payload};
                    else
                        return category;
                }),
                editCategory: {status: StateStatus.SUCCESS, error: null}
            }

        case CategoryActionTypes.EDIT_CATEGORY_FAILURE:
            return {...state, editCategory: {status: StateStatus.FAILURE, error: action.payload}};

        default:
            return state;
    }
}