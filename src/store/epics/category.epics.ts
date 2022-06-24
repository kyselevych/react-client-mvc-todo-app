import {catchError, from, map, mergeMap, Observable, of} from "rxjs";
import {ofType} from "redux-observable";

import {
    CategoryActionTypes,
    CreateCategoryAction, EditCategoryAction,
    FetchCategoriesAction,
    RemovalCategoryAction
} from "../types/category.types";
import {ApiActionTypes} from 'store/types/api.types';

import {
    queryCategoriesAll,
    mutationCategoryUpdate,
    mutationCategoryDelete,
    mutationCategoryCreate
} from "api/graphql/categories";

import {apiActionCreators} from "../actions/api.actions";
import {ApiSuccessAction} from "../types/api.types";
import {categoryActionCreators} from "../actions/category.actions";
import {Category} from "../../models/categoryModels";


export const fetchCategoriesEpic = (action$: Observable<FetchCategoriesAction>) => {
    return action$.pipe(
        ofType(CategoryActionTypes.FETCH_CATEGORIES),
        mergeMap(() => {
            const apiRequestParams = {...queryCategoriesAll(), feature: CategoryActionTypes.FETCH_CATEGORIES};

            return of(apiActionCreators.apiRequest(apiRequestParams));
        })
    )
};

export const fetchCategoriesSuccessEpic = (action$: Observable<ApiSuccessAction>) => {
    return action$.pipe(
        ofType(`${CategoryActionTypes.FETCH_CATEGORIES}_${ApiActionTypes.API_SUCCESS}`),
        mergeMap(action =>
            of(categoryActionCreators.setCategories(action.payload.data.categories.list as Category[]))
        )
    )
};

export const createCategoryEpic = (action$: Observable<CreateCategoryAction>) => {
    return action$.pipe(
        ofType(CategoryActionTypes.CREATE_CATEGORY),
        mergeMap(action => {
            const apiRequestParams = {
                ...mutationCategoryCreate(action.payload),
                feature: CategoryActionTypes.CREATE_CATEGORY
            };

            return of(apiActionCreators.apiRequest(apiRequestParams));
        })
    )
};

export const createCategorySuccessEpic = (action$: Observable<ApiSuccessAction>) => {
    return action$.pipe(
        ofType(`${CategoryActionTypes.CREATE_CATEGORY}_${ApiActionTypes.API_SUCCESS}`),
        mergeMap(action =>
            of(categoryActionCreators.putCategory(action.payload.data.categories.createCategory as Category))
        )
    )
};

export const removalCategoryEpic = (action$: Observable<RemovalCategoryAction>) => {
    return action$.pipe(
        ofType(CategoryActionTypes.REMOVAL_CATEGORY),
        mergeMap(action => {
            const apiRequestParams = {
                ...mutationCategoryDelete(action.payload),
                feature: CategoryActionTypes.REMOVAL_CATEGORY
            };

            return of(apiActionCreators.apiRequest(apiRequestParams));
        })
    )
};

export const removalCategorySuccessEpic = (action$: Observable<ApiSuccessAction>) => {
    return action$.pipe(
        ofType(`${CategoryActionTypes.REMOVAL_CATEGORY}_${ApiActionTypes.API_SUCCESS}`),
        mergeMap(action =>
            of(categoryActionCreators.removeCategory(action.payload.data.categories.deleteCategory.id as number))
        )
    )
};

export const editCategoryEpic = (action$: Observable<EditCategoryAction>) => {
    return action$.pipe(
        ofType(CategoryActionTypes.EDIT_CATEGORY),
        mergeMap(action => {
            const apiRequestParams = {
                ...mutationCategoryUpdate(action.payload),
                feature: CategoryActionTypes.EDIT_CATEGORY
            };

            return of(apiActionCreators.apiRequest(apiRequestParams));
        })
    )
};

export const editCategorySuccessEpic = (action$: Observable<ApiSuccessAction>) => {
    return action$.pipe(
        ofType(`${CategoryActionTypes.EDIT_CATEGORY}_${ApiActionTypes.API_SUCCESS}`),
        mergeMap(action =>
            of(categoryActionCreators.updateCategory(action.payload.data.categories.updateCategory as Category))
        )
    )
};


const categoryEpics = [
    fetchCategoriesEpic,
    fetchCategoriesSuccessEpic,

    createCategoryEpic,
    createCategorySuccessEpic,

    removalCategoryEpic,
    removalCategorySuccessEpic,

    editCategoryEpic,
    editCategorySuccessEpic
];

export default categoryEpics;