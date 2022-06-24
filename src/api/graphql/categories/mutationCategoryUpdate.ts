import {getGraphqlRequestParams} from "api/common/getGraphqlRequestParams";
import {EditCategoryInput} from "models/categoryModels";

export const mutationCategoryUpdate = (payload: EditCategoryInput) => {
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

    return getGraphqlRequestParams(query, variables);
}