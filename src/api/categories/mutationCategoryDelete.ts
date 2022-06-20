import {graphqlRequest} from "api";

export const mutationCategoryDelete = async (taskId: number) => {
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

    return await graphqlRequest(query, variables);
}