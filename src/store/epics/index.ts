import {combineEpics} from "redux-observable";
import categoryEpics from "./categoryEpics";
import {taskEpics} from "./task.epics";
import repositoryEpics from "./repositoryEpics";
import {apiEpics} from "./api.epics";

export const rootEpic = combineEpics<any>(
    ...apiEpics,
    ...taskEpics,
    ...categoryEpics,
    ...repositoryEpics,

);