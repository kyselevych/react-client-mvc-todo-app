import {combineEpics} from "redux-observable";
import categoryEpics from "./categoryEpics";
import taskEpics from "./taskEpics";
import repositoryEpics from "./repositoryEpics";

export const rootEpic: any = combineEpics(
    ...taskEpics,
    ...categoryEpics,
    ...repositoryEpics
);