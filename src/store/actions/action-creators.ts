import {taskActionCreators} from "./taskActions";
import {categoryActionCreators} from "./categoryActions";
import {filterTasksActionCreators} from "./filterTasksActions";

export const allActionCreators = {
    ...taskActionCreators,
    ...categoryActionCreators,
    ...filterTasksActionCreators
}