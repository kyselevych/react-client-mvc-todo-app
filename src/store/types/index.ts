import type {TaskAction} from "./taskTypes";
import type {CategoryAction} from "./categoryTypes";

export type RootAction = TaskAction | CategoryAction;