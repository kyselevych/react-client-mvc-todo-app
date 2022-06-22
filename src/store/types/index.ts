import type {TaskAction} from "./taskTypes";
import type {CategoryAction} from "./categoryTypes";
import {RepositoryAction} from "./repositoryTypes";

export type RootAction = TaskAction | CategoryAction | RepositoryAction ;

export enum StateStatus {
    DEFAULT = "default",
    LOADING = "loading",
    SUCCESS = "success",
    FAILURE = "failure"
}

export type StateDetails = {
    status: StateStatus,
    error: string | null
}