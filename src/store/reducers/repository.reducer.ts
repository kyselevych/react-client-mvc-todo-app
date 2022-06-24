import {RepositoryAction, RepositoryActionTypes, RepositoryState} from "../types/repository.types";

const initialState: RepositoryState = {
    repositories: [],
    currentRepository: null
};

export const repositoryReducer = (state = initialState, action: RepositoryAction): RepositoryState => {
    switch (action.type) {
        case RepositoryActionTypes.SET_REPOSITORIES:
            return {...state, repositories: action.payload};

        case RepositoryActionTypes.SET_CURRENT_REPOSITORY:
            return {...state, currentRepository: action.payload};

        default:
            return state;
    }
}