import {taskActionCreators} from "./tasks.actions";
import {categoryActionCreators} from "./category.actions";
import {filterTasksActionCreators} from "./filterTasks.actions";
import {repositoryActionCreators} from "./repository.actions";
import {apiActionCreators} from "./api.actions";

export const allActionCreators = {
    ...taskActionCreators,
    ...categoryActionCreators,
    ...filterTasksActionCreators,
    ...repositoryActionCreators,
    ...apiActionCreators
}