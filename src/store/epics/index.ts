import {combineEpics} from "redux-observable";
import categoryEpics from "./category.epics";
import {taskEpics} from "./task.epics";
import repositoryEpics from "./repository.epics";
import {apiEpics} from "./api.epics";

export const rootEpic = combineEpics<any>(
    ...apiEpics,
    ...taskEpics,
    ...categoryEpics,
    ...repositoryEpics,

);