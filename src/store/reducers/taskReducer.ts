import {TaskAction, TaskActionTypes, TaskState, TaskStatus} from "store/types/taskTypes";

const initialState: TaskState = {
    tasks: [],
    status: TaskStatus.DEFAULT,
    error: null
}

export const taskReducer = (state = initialState, action: TaskAction): TaskState => {
    switch (action.type) {
        case TaskActionTypes.FETCH_TASKS:
            return {...state, tasks: [], status: TaskStatus.LOADING, error: null};

        case TaskActionTypes.FETCH_TASKS_SUCCESS:
            return {...state, tasks: action.payload, status: TaskStatus.SUCCESS, error: null};

        case TaskActionTypes.FETCH_TASKS_ERROR:
            return {...state, tasks: [], status: TaskStatus.FAILURE, error: action.payload};

        case TaskActionTypes.CREATE_TASK:
            return {...state, status: TaskStatus.LOADING, error: null};

        case TaskActionTypes.CREATE_TASK_SUCCESS:
            return {...state, tasks: [...state.tasks, action.payload], status: TaskStatus.SUCCESS, error: null};

        case TaskActionTypes.CREATE_TASK_ERROR:
            return {...state, status: TaskStatus.FAILURE, error: action.payload};

        case TaskActionTypes.DELETE_TASK:
            return {...state, tasks: state.tasks.filter(task => task.id !== action.payload)};

        case TaskActionTypes.PERFORM_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.payload)
                        return {...task, isDone: true, dateExecution: new Date().toString()};
                    else
                        return task;
                })
            }

        default:
            return state;
    }
}