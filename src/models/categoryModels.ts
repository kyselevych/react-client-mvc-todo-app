export interface Category {
    id: number,
    name: string
}

export interface CreateCategoryInput {
    name: string
}

export interface EditCategoryInput {
    id: number
    name: string
}