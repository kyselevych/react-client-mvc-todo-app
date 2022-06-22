import {taskActionCreators} from "./taskActions";
import {categoryActionCreators} from "./categoryActions";
import {filterTasksActionCreators} from "./filterTasksActions";
import {repositoryActionCreators} from "./repositoryActions";

export const allActionCreators = {
    ...taskActionCreators,
    ...categoryActionCreators,
    ...filterTasksActionCreators,
    ...repositoryActionCreators
}