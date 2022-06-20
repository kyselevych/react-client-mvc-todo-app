export type Category = {
    id: number,
    name: string
}

export type CreateCategoryInput = {
    name: string
}

export type EditCategoryInput = {
    id: number
    name: string
}