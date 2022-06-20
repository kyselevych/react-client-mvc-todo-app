import {graphqlRequest} from "api";
import {CreateCategoryInput} from "models/categoryModels";

export const mutationCategoryCreate = async (payload: CreateCategoryInput) => {
    const query = `
        mutation categoryCreate($categoryCreate: CategoryCreateInputType!) {
            categories {
                createCategory(categoryCreateInputType: $categoryCreate) {
                    id,
                    name
                }
            }
        }
    `;

    const variables = {
        categoryCreate: payload
    };

    return await graphqlRequest(query, variables);
}