import {
    FetchCurrentRepositoryAction,
    FetchRepositoriesAction,
    RepositoryActionTypes,
    SetCurrentRepositoryAction,
    SetRepositoriesAction,
    SwitchRepositoryAction,
} from "../types/repository.types";
import {Repository} from "models/repositoryModels";

export const repositoryActionCreators = {
    setRepositories: (payload: Repository[]): SetRepositoriesAction => {
        return {type: RepositoryActionTypes.SET_REPOSITORIES, payload};
    },
    setCurrentRepository: (payload: Repository): SetCurrentRepositoryAction => {
        return {type: RepositoryActionTypes.SET_CURRENT_REPOSITORY, payload};
    },

    fetchRepositories: (): FetchRepositoriesAction => {
        return {type: RepositoryActionTypes.FETCH_REPOSITORIES};
    },
    fetchCurrentRepository: (): FetchCurrentRepositoryAction => {
        return {type: RepositoryActionTypes.FETCH_CURRENT_REPOSITORY};
    },
    switchRepository: (payload: string): SwitchRepositoryAction => {
        return {type: RepositoryActionTypes.SWITCH_REPOSITORY, payload};
    }
}