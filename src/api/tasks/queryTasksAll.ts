import {graphqlRequest} from "api/graphqlRequest";
import {FetchTasksInput} from "models/taskModels";

export const queryTasksAll = async (variables?: FetchTasksInput) => {
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

    return await graphqlRequest(query, variables);
}