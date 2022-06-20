import {TaskAction, TaskActionTypes, TaskState} from "store/types/taskTypes";
import {StateStatus} from "../types";

const initialState: TaskState = {
    tasks: [],
    fetchTasks: {
        status: StateStatus.DEFAULT,
        error: null
    },
    performTask: {
        status: StateStatus.DEFAULT,
        error: null
    },
    createTask: {
        status: StateStatus.DEFAULT,
        error: null
    },
    deleteTask: {
        status: StateStatus.DEFAULT,
        error: null
    }
}

export const taskReducer = (state = initialState, action: TaskAction): TaskState => {
    switch (action.type) {
        case TaskActionTypes.FETCH_TASKS:
            return {...state, tasks: [], fetchTasks: {status: StateStatus.LOADING, error: null}};

        case TaskActionTypes.FETCH_TASKS_SUCCESS:
            return {...state, tasks: action.payload, fetchTasks: {status: StateStatus.SUCCESS, error: null}};

        case TaskActionTypes.FETCH_TASKS_FAILURE:
            return {...state, tasks: [], fetchTasks: {status: StateStatus.FAILURE, error: action.payload}};

        case TaskActionTypes.CREATE_TASK:
            return {...state, createTask: {status: StateStatus.LOADING, error: null}};

        case TaskActionTypes.CREATE_TASK_SUCCESS:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
                createTask: {status: StateStatus.SUCCESS, error: null}
            };

        case TaskActionTypes.CREATE_TASK_FAILURE:
            return {...state, createTask: {status: StateStatus.FAILURE, error: action.payload}};

        case TaskActionTypes.DELETE_TASK:
            return {...state, deleteTask: {status: StateStatus.LOADING, error: null}};

        case TaskActionTypes.DELETE_TASK_SUCCESS:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload),
                deleteTask: {status: StateStatus.SUCCESS, error: null}
            };

        case TaskActionTypes.DELETE_TASK_FAILURE:
            return {...state, deleteTask: {status: StateStatus.FAILURE, error: action.payload}};

        case TaskActionTypes.PERFORM_TASK:
            return {...state, performTask: {status: StateStatus.LOADING, error: null}}

        case TaskActionTypes.PERFORM_TASK_SUCCESS:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.payload.id)
                        return {...action.payload};
                    else
                        return task;
                }),
                performTask: {status: StateStatus.SUCCESS, error: null}
            }

        case TaskActionTypes.PERFORM_TASK_FAILURE:
            return {...state, performTask: {status: StateStatus.FAILURE, error: action.payload}};

        default:
            return state;
    }
}