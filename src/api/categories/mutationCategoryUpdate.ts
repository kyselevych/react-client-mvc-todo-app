import {graphqlRequest} from "api";
import {CreateCategoryInput, EditCategoryInput} from "models/categoryModels";

export const mutationCategoryUpdate = async (payload: EditCategoryInput) => {
    const query = `
        mutation categoryUpdate($categoryUpdate: CategoryUpdateInputType!) {
            categories {
                updateCategory(categoryUpdateInputType: $categoryUpdate) {
                    id,
                    name
                }
            }
        }
    `;

    const variables = {
        categoryUpdate: payload
    };

    return await graphqlRequest(query, variables);
}