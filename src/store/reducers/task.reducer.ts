import {TaskAction, TaskActionTypes, TaskState} from "store/types/task.types";

const initialState: TaskState = [];

export const taskReducer = (state = initialState, action: TaskAction): TaskState => {
    switch (action.type) {
        case TaskActionTypes.SET_TASKS:
            return action.payload;

        case TaskActionTypes.PUT_TASK:
            return [...state, action.payload];

        case TaskActionTypes.REMOVE_TASK:
            return state.filter(task => task.id !== action.payload)

        case TaskActionTypes.UPDATE_TASK:
            return state.map(task => {
                if (task.id === action.payload.id)
                    return {...action.payload};
                else
                    return task;
            });

        default:
            return state;
    }
}