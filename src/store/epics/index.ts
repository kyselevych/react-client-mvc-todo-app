import {createTaskEpic, deleteTaskEpic, fetchTasksEpic, performTaskEpic} from "./taskEpics";
import {combineEpics} from "redux-observable";

export const rootEpic: any = combineEpics(
    fetchTasksEpic,
    createTaskEpic,
    deleteTaskEpic,
    performTaskEpic
);