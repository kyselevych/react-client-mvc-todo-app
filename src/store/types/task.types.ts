import {CreateTaskInput, FetchTasksInput, Task} from "models/taskModels";

export type TaskState = Task[];

export enum TaskActionTypes {
    SET_TASKS = `SET_TASKS`,
    PUT_TASK = "PUT_TASK",
    REMOVE_TASK = "REMOVE_TASK",
    UPDATE_TASK = "UPDATE_TASK",

    FETCH_TASKS = "FETCH_TASKS",
    CREATE_TASK = "CREATE_TASK",
    REMOVAL_TASK = "REMOVAL_TASK",
    PERFORM_TASK = "PERFORM_TASK",
}

// Document actions

export type SetTasksAction = {
    type: TaskActionTypes.SET_TASKS,
    payload: Task[]
}

export type PutTaskAction = {
    type: TaskActionTypes.PUT_TASK,
    payload: Task
}

export type RemoveTaskAction = {
    type: TaskActionTypes.REMOVE_TASK,
    payload: number
}

export type UpdateTaskAction = {
    type: TaskActionTypes.UPDATE_TASK,
    payload: Task
}

// Command actions

export type FetchTasksAction = {
    type: TaskActionTypes.FETCH_TASKS,
    payload: FetchTasksInput
}

export type CreateTaskAction = {
    type: TaskActionTypes.CREATE_TASK,
    payload: CreateTaskInput
}

export type RemovalTaskAction = {
    type: TaskActionTypes.REMOVAL_TASK,
    payload: number
}

export type PerformTaskAction = {
    type: TaskActionTypes.PERFORM_TASK,
    payload: number
}


export type TaskAction =
    | PutTaskAction
    | SetTasksAction
    | RemoveTaskAction
    | UpdateTaskAction

    | FetchTasksAction
    | CreateTaskAction
    | RemovalTaskAction
    | PerformTaskAction
    ;