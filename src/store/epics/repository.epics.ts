import {mergeMap, Observable, of} from "rxjs";
import {ofType} from "redux-observable";

import {
    FetchCurrentRepositoryAction,
    FetchRepositoriesAction,
    RepositoryActionTypes,
    SwitchRepositoryAction
} from "../types/repository.types";

import {mutationStorageSwitch, queryStorageAll, queryStorageCurrent} from "api/graphql/repositories";

import {Repository} from "models/repositoryModels";
import {repositoryActionCreators} from "../actions/repository.actions";
import {apiActionCreators} from "../actions/api.actions";
import {ApiSuccessAction, ApiActionTypes} from "../types/api.types";


export const fetchRepositoriesEpic = (action$: Observable<FetchRepositoriesAction>) => {
    return action$.pipe(
        ofType(RepositoryActionTypes.FETCH_REPOSITORIES),
        mergeMap(action => {
            const apiRequestParams = {...queryStorageAll(), feature: RepositoryActionTypes.FETCH_REPOSITORIES};

            return of(apiActionCreators.apiRequest(apiRequestParams));
        })
    )
};

export const fetchRepositoriesSuccessEpic = (action$: Observable<ApiSuccessAction>) => {
    return action$.pipe(
        ofType(`${RepositoryActionTypes.FETCH_REPOSITORIES}_${ApiActionTypes.API_SUCCESS}`),
        mergeMap(action =>
            of(repositoryActionCreators.setRepositories(action.payload.data.storage.list as Repository[]))
        )
    )
};

export const fetchCurrentRepositoryEpic = (action$: Observable<FetchCurrentRepositoryAction>) => {
    return action$.pipe(
        ofType(RepositoryActionTypes.FETCH_CURRENT_REPOSITORY),
        mergeMap(() => {
            const apiRequestParams = {...queryStorageCurrent(), feature: RepositoryActionTypes.FETCH_CURRENT_REPOSITORY};

            return of(apiActionCreators.apiRequest(apiRequestParams));
        })
    )
};

export const fetchCurrentRepositorySuccessEpic = (action$: Observable<ApiSuccessAction>) => {
    return action$.pipe(
        ofType(`${RepositoryActionTypes.FETCH_CURRENT_REPOSITORY}_${ApiActionTypes.API_SUCCESS}`),
        mergeMap(action =>
            of(repositoryActionCreators.setCurrentRepository(action.payload.data.storage.current as Repository))
        )
    )
};

export const switchRepositoryEpic = (action$: Observable<SwitchRepositoryAction>) => {
    return action$.pipe(
        ofType(RepositoryActionTypes.SWITCH_REPOSITORY),
        mergeMap(action => {
            const apiRequestParams = {
                ...mutationStorageSwitch(action.payload),
                feature: RepositoryActionTypes.SWITCH_REPOSITORY
            };

            return of(apiActionCreators.apiRequest(apiRequestParams));
        })
    )
};

export const switchRepositorySuccessEpic = (action$: Observable<ApiSuccessAction>) => {
    return action$.pipe(
        ofType(`${RepositoryActionTypes.SWITCH_REPOSITORY}_${ApiActionTypes.API_SUCCESS}`),
        mergeMap(action =>
            of(repositoryActionCreators.setCurrentRepository(action.payload.data.storage.switch as Repository))
        )
    )
};


const repositoryEpics = [
    fetchRepositoriesEpic,
    fetchRepositoriesSuccessEpic,

    fetchCurrentRepositoryEpic,
    fetchCurrentRepositorySuccessEpic,

    switchRepositoryEpic,
    switchRepositorySuccessEpic
];

export default repositoryEpics;