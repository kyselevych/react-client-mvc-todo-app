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
                    ...action.payload,
                }]
            };
        case TaskActionTypes.DELETE_TASK:
            return {...state, tasks: state.tasks.filter(task => task.id !== action.payload)}
        case TaskActionTypes.PERFORM_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.payload)
                        return {...task, completed: true, dateExecution: new Date().toString()};
                    else
                        return task;
                })
            }
        default:
            return state;
    }
}