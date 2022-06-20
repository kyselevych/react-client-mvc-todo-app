import {combineEpics} from "redux-observable";
import categoryEpics from "./categoryEpics";
import taskEpics from "./taskEpics";

export const rootEpic: any = combineEpics(
    ...taskEpics,
    ...categoryEpics
);