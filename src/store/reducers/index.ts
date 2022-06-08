import {combineReducers} from 'redux';
import {taskReducer} from "./taskReducer";
import {categoryReducer} from "./categoryReducer";

export const rootReducer = combineReducers({
    tasks: taskReducer,
    categories: categoryReducer
});

export type RootState = ReturnType<typeof rootReducer>;