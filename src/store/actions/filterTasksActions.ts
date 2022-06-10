import {FilterTasksActionTypes, FilterTasksAllAction, FilterTasksByCategoryIdAction} from "types/filterTasksTypes";

export const showAllTasks = (): FilterTasksAllAction => {
    return {type: FilterTasksActionTypes.FILTER_TASKS_ALL}
}

export const showTasksByCategoryId = (payload: number): FilterTasksByCategoryIdAction => {
    return {type: FilterTasksActionTypes.FILTER_TASKS_BY_CATEGORY_ID, payload}
}