import {CreateTaskInput, CreateTaskAction, TaskActionTypes} from "types/taskTypes";

export const createTask = (payload: CreateTaskInput): CreateTaskAction => {
    return {type: TaskActionTypes.CREATE_TASK, payload}
}