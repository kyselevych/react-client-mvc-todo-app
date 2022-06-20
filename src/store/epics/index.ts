import {createTaskEpic, deleteTaskEpic, fetchTasksEpic, performTaskEpic} from "./taskEpics";
import {combineEpics} from "redux-observable";
import {createCategoryEpic, deleteCategoryEpic, editCategoryEpic, fetchCategoriesEpic} from "./categoryEpics";

export const rootEpic: any = combineEpics(
    fetchTasksEpic,
    createTaskEpic,
    deleteTaskEpic,
    performTaskEpic,
    fetchCategoriesEpic,
    editCategoryEpic,
    deleteCategoryEpic,
    createCategoryEpic
);