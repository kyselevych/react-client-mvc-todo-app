import type {TaskAction} from "./taskTypes";
import type {CategoryAction} from "./categoryTypes";

export type RootAction = TaskAction | CategoryAction;

export enum StateStatus {
    DEFAULT = "default",
    LOADING = "loading",
    SUCCESS = "success",
    FAILURE = "failure"
}