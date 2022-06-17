import {graphqlRequest} from "api";
import {CreateTaskPayload} from "store/types/taskTypes";

export const mutationTaskCreate = async (variables: CreateTaskPayload) => {
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

    return await graphqlRequest(query, variables);
}