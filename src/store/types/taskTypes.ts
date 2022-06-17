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
    CREATE_TASK_SUCCESS = "CREATE_TASK_SUCCESS",
    CREATE_TASK_ERROR = "CREATE_TASK_ERROR",
    DELETE_TASK = "DELETE_TASK",
    PERFORM_TASK = "PERFORM_TASK",
}

export enum TaskStatus {
    DEFAULT = "default",
    LOADING = "loading",
    SUCCESS = "success",
    FAILURE = "failure"
}

// Payload Types

export type FetchTasksPayload = {
    categoryId?: number | null
}

export type CreateTaskPayload = {
    taskCreate: {
        name: string,
        deadline?: string,
        categoryId?: number
    }
}

// Action Types

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
    payload: CreateTaskPayload
}

export type CreateTaskSuccessAction = {
    type: TaskActionTypes.CREATE_TASK_SUCCESS,
    payload: Task
}

export type CreateTaskErrorAction = {
    type: TaskActionTypes.CREATE_TASK_ERROR,
    payload: string
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
    | FetchTasksAction
    | FetchTasksSuccessAction
    | FetchTasksErrorAction

    | CreateTaskAction
    | CreateTaskSuccessAction
    | CreateTaskErrorAction

    | DeleteTaskAction
    | PerformTaskAction
    ;