import {Category} from "./categoryTypes";

export interface TaskState {
    tasks: Task[],
    nextCreateTaskId: number
}

// Actions

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

// Types

export type Task = {
    id: number,
    name: string,
    completed: boolean
    deadline: string | null,
    dateExecution: string | null,
    categoryId: number | null,
    category: any
}

export type CreateTaskInput = {
    name: string,
    deadline: string,
    categoryId: number,
    category: Category | null
}


export type TaskAction =
    CreateTaskAction
    | DeleteTaskAction
    | PerformTaskAction;