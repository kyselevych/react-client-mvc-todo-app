import {Task, CreateTaskInput} from "models/taskModels";

export interface TaskState {
    tasks: Task[],
    nextCreateTaskId: number
}

export enum TaskActionTypes {
    CREATE_TASK = "CREATE_TASK",
    DELETE_TASK = "DELETE_TASK",
    PERFORM_TASK = "PERFORM_TASK",
}

export interface CreateTaskAction {
    type: TaskActionTypes.CREATE_TASK,
    payload: CreateTaskInput
}

export interface DeleteTaskAction {
    type: TaskActionTypes.DELETE_TASK,
    payload: number
}

export interface PerformTaskAction {
    type: TaskActionTypes.PERFORM_TASK,
    payload: number
}

export type TaskAction =
    CreateTaskAction
    | DeleteTaskAction
    | PerformTaskAction;