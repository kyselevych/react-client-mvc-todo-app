import {combineReducers} from 'redux';
import {taskReducer} from "./task.reducer";
import {categoryReducer} from "./categoryReducer";
import {filterTasksReducer} from "./filterTasksReducer";
import {repositoryReducer} from "./repositoryReducer";

export const rootReducer = combineReducers({
    tasks: taskReducer,
    categories: categoryReducer,
    filterTasks: filterTasksReducer,
    repositories: repositoryReducer
});