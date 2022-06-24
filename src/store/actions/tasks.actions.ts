import {
    CreateTaskAction,
    TaskActionTypes,
    RemovalTaskAction,
    PerformTaskAction,
    FetchTasksAction,
    SetTasksAction,
    RemoveTaskAction,
    UpdateTaskAction,
    PutTaskAction,
} from "store/types/task.types";
import {CreateTaskInput, FetchTasksInput, Task} from "models/taskModels";

export const taskActionCreators = {
    setTasks: (payload: Task[]): SetTasksAction => {
        return {type: TaskActionTypes.SET_TASKS, payload}
    },
    removeTask: (payload: number): RemoveTaskAction => {
        return {type: TaskActionTypes.REMOVE_TASK, payload}
    },
    updateTask: (payload: Task): UpdateTaskAction => {
        return {type: TaskActionTypes.UPDATE_TASK, payload}
    },
    putTask: (payload: Task): PutTaskAction => {
        return {type: TaskActionTypes.PUT_TASK, payload}
    },

    fetchTasks: (payload: FetchTasksInput): FetchTasksAction => {
        return {type: TaskActionTypes.FETCH_TASKS, payload}
    },
    createTask: (payload: CreateTaskInput): CreateTaskAction => {
        return {type: TaskActionTypes.CREATE_TASK, payload}
    },
    removalTask: (payload: number): RemovalTaskAction => {
        return {type: TaskActionTypes.REMOVAL_TASK, payload}
    },
    performTask: (payload: number): PerformTaskAction => {
        return {type: TaskActionTypes.PERFORM_TASK, payload}
    }
};