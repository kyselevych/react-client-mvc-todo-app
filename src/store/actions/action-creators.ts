import {taskActionCreators} from "./tasks.actions";
import {categoryActionCreators} from "./category.actions";
import {filterTasksActionCreators} from "./filterTasksActions";
import {repositoryActionCreators} from "./repositoryActions";
import {apiActionCreators} from "./api.actions";

export const allActionCreators = {
    ...taskActionCreators,
    ...categoryActionCreators,
    ...filterTasksActionCreators,
    ...repositoryActionCreators,
    ...apiActionCreators
}