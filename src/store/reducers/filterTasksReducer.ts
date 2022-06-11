import {FilterTasksAction, FilterTasksActionTypes, FilterTasksState} from "store/types/filterTasksTypes";

const initialState: FilterTasksState = {
    categoryId: null
}

export const filterTasksReducer = (state = initialState, action: FilterTasksAction): FilterTasksState => {
    switch (action.type) {
        case FilterTasksActionTypes.FILTER_TASKS_ALL:
            return {...state, categoryId: null}
        case FilterTasksActionTypes.FILTER_TASKS_BY_CATEGORY_ID:
            return {...state, categoryId: action.payload}
        default:
            return state;
    }
}