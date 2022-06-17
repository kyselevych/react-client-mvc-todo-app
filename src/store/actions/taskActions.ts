import {
    CreateTaskAction,
    TaskActionTypes,
    DeleteTaskAction,
    PerformTaskAction,
    FetchTasksAction,
    FetchTasksSuccessAction,
    FetchTasksErrorAction,
    FetchTasksPayload
} from "store/types/taskTypes";
import {Task} from "models/taskModels";

export const taskActionCreators = {
    fetchTasks: (payload: FetchTasksPayload): FetchTasksAction => {
        return {type: TaskActionTypes.FETCH_TASKS, payload: payload}
    },
    fetchTasksSuccess: (payload: Task[]): FetchTasksSuccessAction => {
        return {type: TaskActionTypes.FETCH_TASKS_SUCCESS, payload}
    },
    fetchTasksFailure: (payload: string): FetchTasksErrorAction => {
        return {type: TaskActionTypes.FETCH_TASKS_ERROR, payload}
    },
    createTask: (payload: Task): CreateTaskAction => {
        return {type: TaskActionTypes.CREATE_TASK, payload}
    },
    deleteTask: (payload: number): DeleteTaskAction => {
        return {type: TaskActionTypes.DELETE_TASK, payload}
    },
    performTask: (payload: number): PerformTaskAction => {
        return {type: TaskActionTypes.PERFORM_TASK, payload}
    }
};