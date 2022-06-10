

export interface FilterTasksState {
    categoryId: number | null
}

// Actions

export enum FilterTasksActionTypes {
    FILTER_TASKS_BY_CATEGORY_ID = "FILTER_TASKS_BY_CATEGORY_ID",
    FILTER_TASKS_ALL = "FILTER_TASKS_ALL"
}

export interface FilterTasksByCategoryIdAction {
    type: FilterTasksActionTypes.FILTER_TASKS_BY_CATEGORY_ID,
    payload: number
}

export interface FilterTasksAllAction {
    type: FilterTasksActionTypes.FILTER_TASKS_ALL
}

// Types


export type FilterTasksAction = FilterTasksByCategoryIdAction | FilterTasksAllAction;