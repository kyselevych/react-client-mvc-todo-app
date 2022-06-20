import {catchError, from, map, mergeMap, Observable, of} from "rxjs";
import {RootAction} from "../types";
import {ofType} from "redux-observable";
import {CategoryActionTypes, EditCategoryAction} from "../types/categoryTypes";
import {queryCategoriesAll} from "api/categories/queryCategoriesAll";
import {categoryActionCreators} from "../actions/categoryActions";
import {mutationCategoryUpdate} from "../../api/categories/mutationCategoryUpdate";
import {Category, CreateCategoryInput, EditCategoryInput} from "../../models/categoryModels";
import {mutationCategoryDelete} from "../../api/categories/mutationCategoryDelete";
import {mutationCategoryCreate} from "../../api/categories/mutationCategoryCreate";

export const fetchCategoriesEpic = (action$: Observable<RootAction>): Observable<RootAction> => {
    return action$.pipe(
        ofType(CategoryActionTypes.FETCH_CATEGORIES),
        mergeMap(() =>
            from(queryCategoriesAll()).pipe(
                map(json => categoryActionCreators.fetchCategoriesSuccess(json.data.categories.list)),
                catchError(err => of(categoryActionCreators.fetchCategoriesFailure(err)))
            )
        )
    )
};

export const editCategoryEpic = (action$: Observable<RootAction>): Observable<RootAction> => {
    return action$.pipe(
        ofType(CategoryActionTypes.EDIT_CATEGORY),
        mergeMap(action =>
            from(mutationCategoryUpdate(action.payload as EditCategoryInput)).pipe(
                map(json => categoryActionCreators.editCategorySuccess(json.data.categories.updateCategory)),
                catchError(err => of(categoryActionCreators.editCategoryFailure(err)))
            )
        )
    )
};

export const deleteCategoryEpic = (action$: Observable<RootAction>): Observable<RootAction> => {
    return action$.pipe(
        ofType(CategoryActionTypes.DELETE_CATEGORY),
        mergeMap(action =>
            from(mutationCategoryDelete(action.payload as number)).pipe(
                map(() => categoryActionCreators.deleteCategorySuccess(action.payload as number)),
                catchError(err => of(categoryActionCreators.deleteCategoryFailure(err)))
            )
        )
    )
};

export const createCategoryEpic = (action$: Observable<RootAction>): Observable<RootAction> => {
    return action$.pipe(
        ofType(CategoryActionTypes.CREATE_CATEGORY),
        mergeMap(action =>
            from(mutationCategoryCreate(action.payload as CreateCategoryInput)).pipe(
                map(json => categoryActionCreators.createCategorySuccess(action.payload as Category)),
                catchError(err => of(categoryActionCreators.createCategoryFailure(err)))
            )
        )
    )
};