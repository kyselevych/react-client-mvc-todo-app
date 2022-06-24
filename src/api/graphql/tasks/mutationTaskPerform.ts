import {getGraphqlRequestParams} from "api/common/getGraphqlRequestParams";

export const mutationTaskPerform = (taskId: number) => {
    const query = `
        mutation taskPerform($performId: Int!) {
            tasks {
                performTask(id: $performId) {
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
        performId: taskId
    }

    return getGraphqlRequestParams(query, variables);
}