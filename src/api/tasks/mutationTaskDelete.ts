import {graphqlRequest} from "api/graphqlRequest";

export const mutationTaskDelete = async (taskId: number) => {
    const query = `
        mutation taskDelete($deleteId: Int!) {
            tasks {
                deleteTask(id: $deleteId) {
                    id
                }
            }
        }
    `;

    const variables = {
        deleteId: taskId
    }

    return await graphqlRequest(query, variables);
}