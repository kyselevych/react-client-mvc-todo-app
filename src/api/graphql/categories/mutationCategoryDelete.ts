import {getGraphqlRequestParams} from "api/common/getGraphqlRequestParams";

export const mutationCategoryDelete = (taskId: number) => {
    const query = `
        mutation categoryDelete($deleteId: Int!) {
            categories {
                deleteCategory(id: $deleteId) {
                    id
                }
            }
        }
    `;

    const variables = {
        deleteId: taskId
    };

    return getGraphqlRequestParams(query, variables);
}