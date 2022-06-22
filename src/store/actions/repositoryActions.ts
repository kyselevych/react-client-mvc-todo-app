import {
    FetchCurrentRepositoryAction,
    FetchCurrentRepositoryErrorAction,
    FetchCurrentRepositorySuccessAction,
    FetchRepositoriesAction,
    FetchRepositoriesErrorAction,
    FetchRepositoriesSuccessAction,
    RepositoryActionTypes,
    SwitchRepositoryAction,
    SwitchRepositoryErrorAction,
    SwitchRepositorySuccessAction
} from "../types/repositoryTypes";
import {Repository} from "models/repositoryModels";

export const repositoryActionCreators = {
    fetchRepositories: (): FetchRepositoriesAction => {
        return {type: RepositoryActionTypes.FETCH_REPOSITORIES};
    },
    fetchRepositoriesSuccess: (payload: Repository[]): FetchRepositoriesSuccessAction => {
        return {type: RepositoryActionTypes.FETCH_REPOSITORIES_SUCCESS, payload};
    },
    fetchRepositoriesFailure: (payload: string): FetchRepositoriesErrorAction => {
        return {type: RepositoryActionTypes.FETCH_REPOSITORIES_FAILURE, payload};
    },

    fetchCurrentRepository: (): FetchCurrentRepositoryAction => {
        return {type: RepositoryActionTypes.FETCH_CURRENT_REPOSITORY};
    },
    fetchCurrentRepositorySuccess: (payload: Repository): FetchCurrentRepositorySuccessAction => {
        return {type: RepositoryActionTypes.FETCH_CURRENT_REPOSITORY_SUCCESS, payload};
    },
    fetchCurrentRepositoryFailure: (payload: string): FetchCurrentRepositoryErrorAction => {
        return {type: RepositoryActionTypes.FETCH_CURRENT_REPOSITORY_FAILURE, payload};
    },

    switchRepository: (payload: string): SwitchRepositoryAction => {
        return {type: RepositoryActionTypes.SWITCH_REPOSITORY, payload};
    },
    switchRepositorySuccess: (payload: Repository): SwitchRepositorySuccessAction => {
        return {type: RepositoryActionTypes.SWITCH_REPOSITORY_SUCCESS, payload};
    },
    switchRepositoryFailure: (payload: string): SwitchRepositoryErrorAction => {
        return {type: RepositoryActionTypes.SWITCH_REPOSITORY_FAILURE, payload};
    }
}