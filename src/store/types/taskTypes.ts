import {Task} from "models/taskModels";
import {StateStatus} from "./index";

export type StateDetails = {
    status: StateStatus,
    error: string | null
}

export type TaskState = {
    tasks: Task[],
    fetchTasks: StateDetails,
    createTask: StateDetails,
    performTask: StateDetails,
    deleteTask: StateDetails
}

export enum TaskActionTypes {
    FETCH_TASKS = "FETCH_TASKS",
    FETCH_TASKS_SUCCESS = "FETCH_TASKS_SUCCESS",
    FETCH_TASKS_ERROR = "FETCH_TASKS_ERROR",
    CREATE_TASK = "CREATE_TASK",
    CREATE_TASK_SUCCESS = "CREATE_TASK_SUCCESS",
    CREATE_TASK_ERROR = "CREATE_TASK_ERROR",
    DELETE_TASK = "DELETE_TASK",
    DELETE_TASK_SUCCESS = "DELETE_TASK_SUCCESS",
    DELETE_TASK_ERROR = "DELETE_TASK_ERROR",
    PERFORM_TASK = "PERFORM_TASK",
    PERFORM_TASK_SUCCESS = "PERFORM_TASK_SUCCESS",
    PERFORM_TASK_ERROR = "PERFORM_TASK_ERROR",
}

// Payload Types

export type FetchTasksPayload = {
    categoryId?: number | null
}

export type CreateTaskPayload = {
    name: string,
    deadline?: string,
    categoryId?: number
}

export type DeleteTaskPayload = {
    deleteId: number
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

export type DeleteTaskSuccessAction = {
    type: TaskActionTypes.DELETE_TASK_SUCCESS,
    payload: number
}

export type DeleteTaskErrorAction = {
    type: TaskActionTypes.DELETE_TASK_ERROR,
    payload: string
}

export type PerformTaskAction = {
    type: TaskActionTypes.PERFORM_TASK,
    payload: number
}

export type PerformTaskSuccessAction = {
    type: TaskActionTypes.PERFORM_TASK_SUCCESS,
    payload: Task
}

export type PerformTaskErrorAction = {
    type: TaskActionTypes.PERFORM_TASK_ERROR,
    payload: string
}

export type TaskAction =
    | FetchTasksAction
    | FetchTasksSuccessAction
    | FetchTasksErrorAction

    | CreateTaskAction
    | CreateTaskSuccessAction
    | CreateTaskErrorAction

    | DeleteTaskAction
    | DeleteTaskSuccessAction
    | DeleteTaskErrorAction

    | PerformTaskAction
    | PerformTaskSuccessAction
    | PerformTaskErrorAction
    ;