import {FetchTasksInput} from "models/taskModels";
import {getGraphqlRequestParams} from "api/common/getGraphqlRequestParams";

export const queryTasksAll = (payload?: FetchTasksInput) => {
    const query = `
        query tasksAll($categoryId: Int) {
            tasks {
                all(categoryId: $categoryId) {
                    id,
                    name,
                    isDone,
                    deadline,
                    dateExecution,
                    categoryId
                }
            }
        }
    `;

    const variables = {
        ...payload
    }

    return getGraphqlRequestParams(query, variables);
}