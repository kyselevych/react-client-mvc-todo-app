import {getGraphqlRequestParams} from "api/common/getGraphqlRequestParams";

export const mutationTaskDelete = (taskId: number) => {
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

    return getGraphqlRequestParams(query, variables);
}