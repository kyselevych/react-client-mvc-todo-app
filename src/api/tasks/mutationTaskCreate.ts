import {graphqlRequest} from "api";
import {CreateTaskPayload} from "store/types/taskTypes";

export const mutationTaskCreate = async (payload: CreateTaskPayload) => {
    const query = `
        mutation taskCreate($taskCreate: TaskCreateInputType!) {
            tasks {
                createTask(taskCreateInputType: $taskCreate) {
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
        taskCreate: payload
    }

    return await graphqlRequest(query, variables);
}