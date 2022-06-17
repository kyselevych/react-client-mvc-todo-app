import {Category} from "models/categoryModels";

export interface Task {
    id: number,
    name: string,
    isDone: boolean
    deadline: string | null,
    dateExecution: string | null,
    categoryId: number | null,
    category: Category | null
}

export interface CreateTaskInput {
    name: string,
    deadline: string,
    categoryId: number,
    category: Category | null
}