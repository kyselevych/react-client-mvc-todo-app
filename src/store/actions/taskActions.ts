import {CreateTaskAction, TaskActionTypes, DeleteTaskAction, PerformTaskAction} from "store/types/taskTypes";
import {CreateTaskInput} from "models/taskModels";

export const taskActionCreators = {
    createTask: (payload: CreateTaskInput): CreateTaskAction => {
        return {type: TaskActionTypes.CREATE_TASK, payload}
    },
    deleteTask: (payload: number): DeleteTaskAction => {
        return {type: TaskActionTypes.DELETE_TASK, payload}
    },
    performTask: (payload: number): PerformTaskAction => {
        return {type: TaskActionTypes.PERFORM_TASK, payload}
    }
};