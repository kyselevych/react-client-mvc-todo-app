import {catchError, from, map, mergeMap, Observable, of} from "rxjs";
import {ofType} from "redux-observable";

import {RootAction} from "../types";
import {RepositoryActionTypes} from "../types/repositoryTypes";
import {mutationStorageSwitch, queryStorageAll, queryStorageCurrent} from "api/repositories";
import {repositoryActionCreators} from "../actions/repositoryActions";


export const fetchRepositoriesEpic = (action$: Observable<RootAction>): Observable<RootAction> => {
    return action$.pipe(
        ofType(RepositoryActionTypes.FETCH_REPOSITORIES),
        mergeMap(() =>
            from(queryStorageAll()).pipe(
                map(json => repositoryActionCreators.fetchRepositoriesSuccess(json.data.storage.list)),
                catchError(err => of(repositoryActionCreators.fetchRepositoriesFailure(err)))
            )
        )
    )
};

export const fetchCurrentRepositoryEpic = (action$: Observable<RootAction>): Observable<RootAction> => {
    return action$.pipe(
        ofType(RepositoryActionTypes.FETCH_CURRENT_REPOSITORY),
        mergeMap(() =>
            from(queryStorageCurrent()).pipe(
                map(json => repositoryActionCreators.fetchCurrentRepositorySuccess(json.data.storage.current)),
                catchError(err => of(repositoryActionCreators.fetchCurrentRepositoryFailure(err)))
            )
        )
    )
};

export const switchRepositoryEpic = (action$: Observable<RootAction>): Observable<RootAction> => {
    return action$.pipe(
        ofType(RepositoryActionTypes.SWITCH_REPOSITORY),
        mergeMap(action =>
            from(mutationStorageSwitch(action.payload as string)).pipe(
                map(json => repositoryActionCreators.switchRepositorySuccess(json.data.storage.switch)),
                catchError(err => of(repositoryActionCreators.switchRepositoryFailure(err)))
            )
        )
    )
};

const repositoryEpics = [
    fetchRepositoriesEpic,
    fetchCurrentRepositoryEpic,
    switchRepositoryEpic
];

export default repositoryEpics;