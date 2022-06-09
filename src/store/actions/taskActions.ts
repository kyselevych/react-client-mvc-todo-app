import {CreateTaskInput, CreateTaskAction, TaskActionTypes, DeleteTaskAction, PerformTaskAction} from "types/taskTypes";

export const createTask = (payload: CreateTaskInput): CreateTaskAction => {
    return {type: TaskActionTypes.CREATE_TASK, payload}
}

export const deleteTask = (payload: number): DeleteTaskAction => {
    return {type: TaskActionTypes.DELETE_TASK, payload}
}

export const performTask = (payload: number): PerformTaskAction => {
    return {type: TaskActionTypes.PERFORM_TASK, payload}
}