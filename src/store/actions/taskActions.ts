import {
    CreateTaskAction,
    TaskActionTypes,
    DeleteTaskAction,
    PerformTaskAction,
    FetchTasksAction,
    FetchTasksSuccessAction,
    FetchTasksErrorAction,
    FetchTasksPayload,
    CreateTaskPayload,
    CreateTaskSuccessAction,
    CreateTaskErrorAction,
    DeleteTaskSuccessAction,
    DeleteTaskErrorAction, PerformTaskSuccessAction, PerformTaskErrorAction
} from "store/types/taskTypes";
import {Task} from "models/taskModels";

export const taskActionCreators = {
    fetchTasks: (payload: FetchTasksPayload): FetchTasksAction => {
        return {type: TaskActionTypes.FETCH_TASKS, payload}
    },
    fetchTasksSuccess: (payload: Task[]): FetchTasksSuccessAction => {
        return {type: TaskActionTypes.FETCH_TASKS_SUCCESS, payload}
    },
    fetchTasksFailure: (payload: string): FetchTasksErrorAction => {
        return {type: TaskActionTypes.FETCH_TASKS_FAILURE, payload}
    },

    createTask: (payload: CreateTaskPayload): CreateTaskAction => {
        return {type: TaskActionTypes.CREATE_TASK, payload}
    },
    createTaskSuccess: (payload: Task): CreateTaskSuccessAction => {
        return {type: TaskActionTypes.CREATE_TASK_SUCCESS, payload}
    },
    createTaskFailure: (payload: string): CreateTaskErrorAction => {
        return {type: TaskActionTypes.CREATE_TASK_FAILURE, payload}
    },

    deleteTask: (payload: number): DeleteTaskAction => {
        return {type: TaskActionTypes.DELETE_TASK, payload}
    },
    deleteTaskSuccess: (payload: number): DeleteTaskSuccessAction => {
        return {type: TaskActionTypes.DELETE_TASK_SUCCESS, payload}
    },
    deleteTaskFailure: (payload: string): DeleteTaskErrorAction => {
        return {type: TaskActionTypes.DELETE_TASK_FAILURE, payload}
    },

    performTask: (payload: number): PerformTaskAction => {
        return {type: TaskActionTypes.PERFORM_TASK, payload}
    },
    performTaskSuccess: (payload: Task): PerformTaskSuccessAction => {
        return {type: TaskActionTypes.PERFORM_TASK_SUCCESS, payload}
    },
    performTaskFailure: (payload: string): PerformTaskErrorAction => {
        return {type: TaskActionTypes.PERFORM_TASK_FAILURE, payload}
    }
};