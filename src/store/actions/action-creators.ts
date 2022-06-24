import {taskActionCreators} from "./tasks.actions";
import {categoryActionCreators} from "./categoryActions";
import {filterTasksActionCreators} from "./filterTasksActions";
import {repositoryActionCreators} from "./repositoryActions";
import {apiActionCreators} from "./apiActions";

export const allActionCreators = {
    ...taskActionCreators,
    ...categoryActionCreators,
    ...filterTasksActionCreators,
    ...repositoryActionCreators,
    ...apiActionCreators
}