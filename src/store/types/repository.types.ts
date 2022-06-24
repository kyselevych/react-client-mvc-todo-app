import {Repository} from "models/repositoryModels";

export type RepositoryState = {
    repositories: Repository[],
    currentRepository: Repository | null
};

export enum RepositoryActionTypes {
    SET_REPOSITORIES = "SET_REPOSITORIES",
    SET_CURRENT_REPOSITORY = "SET_CURRENT_REPOSITORY",

    FETCH_REPOSITORIES = "FETCH_REPOSITORIES",
    FETCH_CURRENT_REPOSITORY = "FETCH_CURRENT_REPOSITORY",
    SWITCH_REPOSITORY = "SWITCH_REPOSITORY",
}

// Action document

export type SetRepositoriesAction = {
    type: RepositoryActionTypes.SET_REPOSITORIES,
    payload: Repository[]
}

export type SetCurrentRepositoryAction = {
    type: RepositoryActionTypes.SET_CURRENT_REPOSITORY,
    payload: Repository
}

// Actions command

export type FetchCurrentRepositoryAction = {
    type: RepositoryActionTypes.FETCH_CURRENT_REPOSITORY
}

export type FetchRepositoriesAction = {
    type: RepositoryActionTypes.FETCH_REPOSITORIES
}

export type SwitchRepositoryAction = {
    type: RepositoryActionTypes.SWITCH_REPOSITORY,
    payload: string
}

export type RepositoryAction =
    | SetRepositoriesAction
    | SetCurrentRepositoryAction
    | FetchCurrentRepositoryAction
    | FetchRepositoriesAction
    | SwitchRepositoryAction
    ;