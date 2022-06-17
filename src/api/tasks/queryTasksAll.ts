import {graphqlRequest} from "api";
import {FetchTasksPayload} from "store/types/taskTypes";

export const queryTasksAll = async (variables?: FetchTasksPayload) => {
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
                    category {
                        id,
                        name
                    }
                }
            }
        }
    `;

    return await graphqlRequest(query, variables);
}