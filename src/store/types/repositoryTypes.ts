import {StateDetails} from './index';
import {Repository} from "models/repositoryModels";

export type RepositoryState = {
    repositories: Repository[],
    currentRepository: Repository | null,
    fetchRepositories: StateDetails,
    fetchCurrentRepository: StateDetails,
    switchRepository: StateDetails
}

export enum RepositoryActionTypes {
    FETCH_REPOSITORIES = "FETCH_REPOSITORIES",
    FETCH_REPOSITORIES_SUCCESS = "FETCH_REPOSITORIES_SUCCESS",
    FETCH_REPOSITORIES_FAILURE = "FETCH_REPOSITORIES_FAILURE",
    FETCH_CURRENT_REPOSITORY = "FETCH_CURRENT_REPOSITORY",
    FETCH_CURRENT_REPOSITORY_SUCCESS = "FETCH_CURRENT_REPOSITORY_SUCCESS",
    FETCH_CURRENT_REPOSITORY_FAILURE = "FETCH_CURRENT_REPOSITORY_FAILURE",
    SWITCH_REPOSITORY = "SWITCH_REPOSITORY",
    SWITCH_REPOSITORY_SUCCESS = "SWITCH_REPOSITORY_SUCCESS",
    SWITCH_REPOSITORY_FAILURE = "SWITCH_REPOSITORY_FAILURE",
}

// Actions

export type FetchCurrentRepositoryAction = {
    type: RepositoryActionTypes.FETCH_CURRENT_REPOSITORY,
    payload?: undefined
}

export type FetchCurrentRepositorySuccessAction = {
    type: RepositoryActionTypes.FETCH_CURRENT_REPOSITORY_SUCCESS,
    payload: Repository
}

export type FetchCurrentRepositoryErrorAction = {
    type: RepositoryActionTypes.FETCH_CURRENT_REPOSITORY_FAILURE,
    payload: string
}

export type FetchRepositoriesAction = {
    type: RepositoryActionTypes.FETCH_REPOSITORIES,
    payload?: undefined
}

export type FetchRepositoriesSuccessAction = {
    type: RepositoryActionTypes.FETCH_REPOSITORIES_SUCCESS,
    payload: Repository[]
}

export type FetchRepositoriesErrorAction = {
    type: RepositoryActionTypes.FETCH_REPOSITORIES_FAILURE,
    payload: string
}

export type SwitchRepositoryAction = {
    type: RepositoryActionTypes.SWITCH_REPOSITORY,
    payload: string
}

export type SwitchRepositorySuccessAction = {
    type: RepositoryActionTypes.SWITCH_REPOSITORY_SUCCESS,
    payload: Repository
}

export type SwitchRepositoryErrorAction = {
    type: RepositoryActionTypes.SWITCH_REPOSITORY_FAILURE,
    payload: string
}

export type RepositoryAction =
    | FetchCurrentRepositoryAction
    | FetchCurrentRepositorySuccessAction
    | FetchCurrentRepositoryErrorAction

    | FetchRepositoriesAction
    | FetchRepositoriesSuccessAction
    | FetchRepositoriesErrorAction

    | SwitchRepositoryAction
    | SwitchRepositorySuccessAction
    | SwitchRepositoryErrorAction
    ;