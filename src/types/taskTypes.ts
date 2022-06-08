export interface TaskState {
    tasks: Task[],
    nextCreateTaskId: number
}

// Actions

export enum TaskActionTypes {
    CREATE_TASK = "CREATE_TASK",
    DELETE_TASK = "DELETE_TASK"
}

export interface CreateTaskAction {
    type: TaskActionTypes.CREATE_TASK,
    payload: CreateTaskInput
}

export interface DeleteTaskAction {
    type: TaskActionTypes.DELETE_TASK,
    payload: DeleteTaskInput
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
    categoryId: number
}

export type DeleteTaskInput = {
    id: number
}

export type TaskAction = CreateTaskAction;