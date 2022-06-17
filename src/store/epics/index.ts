import {createTaskEpic, fetchTasksEpic} from "./taskEpics";
import {combineEpics} from "redux-observable";

export const rootEpic: any = combineEpics(
    fetchTasksEpic,
    createTaskEpic
);