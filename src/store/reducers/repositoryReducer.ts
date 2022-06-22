
import {StateStatus} from "../types";
import {RepositoryAction, RepositoryActionTypes, RepositoryState} from "../types/repositoryTypes";

const initialState: RepositoryState = {
    repositories: [],
    currentRepository: null,
    fetchCurrentRepository: {
        status: StateStatus.DEFAULT,
        error: null
    },
    fetchRepositories: {
        status: StateStatus.DEFAULT,
        error: null
    },
    switchRepository: {
        status: StateStatus.DEFAULT,
        error: null
    }
}

export const repositoryReducer = (state = initialState, action: RepositoryAction): RepositoryState => {
    switch (action.type) {
        case RepositoryActionTypes.FETCH_REPOSITORIES:
            return {...state, fetchRepositories: {status: StateStatus.LOADING, error: null}};

        case RepositoryActionTypes.FETCH_REPOSITORIES_SUCCESS:
            return {...state, repositories: action.payload, fetchRepositories: {status: StateStatus.SUCCESS, error: null}};

        case RepositoryActionTypes.FETCH_REPOSITORIES_FAILURE:
            return {...state, repositories: [], fetchRepositories: {status: StateStatus.FAILURE, error: action.payload}};

        case RepositoryActionTypes.FETCH_CURRENT_REPOSITORY:
            return {...state, fetchCurrentRepository: {status: StateStatus.LOADING, error: null}};

        case RepositoryActionTypes.FETCH_CURRENT_REPOSITORY_SUCCESS:
            return {...state, currentRepository: action.payload, fetchCurrentRepository: {status: StateStatus.SUCCESS, error: null}};

        case RepositoryActionTypes.FETCH_CURRENT_REPOSITORY_FAILURE:
            return {...state, fetchCurrentRepository: {status: StateStatus.FAILURE, error: action.payload}};

        case RepositoryActionTypes.SWITCH_REPOSITORY:
            return {...state, switchRepository: {status: StateStatus.LOADING, error: null}};

        case RepositoryActionTypes.SWITCH_REPOSITORY_SUCCESS:
            return {...state, currentRepository: action.payload, switchRepository: {status: StateStatus.SUCCESS, error: null}};

        case RepositoryActionTypes.SWITCH_REPOSITORY_FAILURE:
            return {...state, switchRepository: {status: StateStatus.FAILURE, error: action.payload}};

        default:
            return state;
    }
}