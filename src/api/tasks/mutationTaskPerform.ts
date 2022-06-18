import {graphqlRequest} from "api";

export const mutationTaskPerform = async (taskId: number) => {
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

    return await graphqlRequest(query, variables);
}