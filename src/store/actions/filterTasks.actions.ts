import {FilterTasksActionTypes, FilterTasksAllAction, FilterTasksByCategoryIdAction} from "store/types/filterTasks.types";

export const filterTasksActionCreators = {
    showAllTasks: (): FilterTasksAllAction => {
        return {type: FilterTasksActionTypes.FILTER_TASKS_ALL}
    },
    showTasksByCategoryId: (payload: number): FilterTasksByCategoryIdAction => {
        return {type: FilterTasksActionTypes.FILTER_TASKS_BY_CATEGORY_ID, payload}
    }
};