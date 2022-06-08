import {TaskState, TaskAction, TaskActionTypes} from "types/taskTypes";

const initialState: TaskState = {
    tasks: [],
    nextCreateTaskId: 0
}

export const taskReducer = (state = initialState, action: TaskAction): TaskState => {
    switch (action.type) {
        case TaskActionTypes.CREATE_TASK:
            return {
                ...state,
                nextCreateTaskId: state.nextCreateTaskId + 1,
                tasks: [...state.tasks, {
                        id: state.nextCreateTaskId,
                    dateExecution: null,
                    completed: false,
                    category: null,
                    ...action.payload,
                }]
            };
        default:
            return state;
    }
}