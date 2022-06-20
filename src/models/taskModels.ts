import {Category} from "models/categoryModels";

export type Task = {
    id: number,
    name: string,
    isDone: boolean
    deadline: string | null,
    dateExecution: string | null,
    categoryId: number | null,
    category: Category | null
}

export type CreateTaskInput = {
    name: string,
    deadline?: string,
    categoryId?: number
}

export type FetchTasksInput = {
    categoryId?: number | null
}