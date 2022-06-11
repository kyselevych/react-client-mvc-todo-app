import {FilterTasksActionTypes, FilterTasksAllAction, FilterTasksByCategoryIdAction} from "store/types/filterTasksTypes";

export const filterTasksActionCreators = {
    showAllTasks: (): FilterTasksAllAction => {
        return {type: FilterTasksActionTypes.FILTER_TASKS_ALL}
    },
    showTasksByCategoryId: (payload: number): FilterTasksByCategoryIdAction => {
        return {type: FilterTasksActionTypes.FILTER_TASKS_BY_CATEGORY_ID, payload}
    }
};