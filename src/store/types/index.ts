import type {TaskAction} from "./task.types";
import type {CategoryAction} from "./category.types";
import {RepositoryAction} from "./repositoryTypes";
import {ApiAction} from "./api.types";

export type RootAction = TaskAction | CategoryAction | RepositoryAction | ApiAction;

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