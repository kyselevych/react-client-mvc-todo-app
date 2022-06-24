import {CreateTaskInput} from "models/taskModels";
import {getGraphqlRequestParams} from "api/common/getGraphqlRequestParams";

export const mutationTaskCreate = (payload: CreateTaskInput) => {
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

    return getGraphqlRequestParams(query, variables);
}