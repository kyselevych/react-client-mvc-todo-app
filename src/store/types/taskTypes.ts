import {Task} from "models/taskModels";

export type TaskState = {
    tasks: Task[],
    status: TaskStatus,
    error: string | null
}

export enum TaskActionTypes {
    FETCH_TASKS = "FETCH_TASKS",
    FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS",
    FETCH_TASKS_ERROR = "FETCH_TASKS_ERROR",
    CREATE_TASK = "CREATE_TASK",
    DELETE_TASK = "DELETE_TASK",
    PERFORM_TASK = "PERFORM_TASK",
}

export enum TaskStatus {
    DEFAULT = "default",
    LOADING = "loading",
    SUCCESS = "success",
    FAILURE = "failure"
}

export type FetchTasksPayload = {
    categoryId?: number | null
}

export type FetchTasksAction = {
    type: TaskActionTypes.FETCH_TASKS,
    payload: FetchTasksPayload
}

export type FetchTasksSuccessAction = {
    type: TaskActionTypes.FETCH_TASKS_SUCCESS,
    payload: Task[]
}

export type FetchTasksErrorAction = {
    type: TaskActionTypes.FETCH_TASKS_ERROR,
    payload: string
}

export type CreateTaskAction = {
    type: TaskActionTypes.CREATE_TASK,
    payload: Task
}

export type DeleteTaskAction = {
    type: TaskActionTypes.DELETE_TASK,
    payload: number
}

export type PerformTaskAction = {
    type: TaskActionTypes.PERFORM_TASK,
    payload: number
}

export type TaskAction =
    CreateTaskAction
    | DeleteTaskAction
    | PerformTaskAction
    | FetchTasksAction
    | FetchTasksSuccessAction
    | FetchTasksErrorAction;