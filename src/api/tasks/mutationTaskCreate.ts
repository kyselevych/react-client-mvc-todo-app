import {graphqlRequest} from "api/graphqlRequest";

import {CreateTaskInput} from "models/taskModels";

export const mutationTaskCreate = async (payload: CreateTaskInput) => {
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