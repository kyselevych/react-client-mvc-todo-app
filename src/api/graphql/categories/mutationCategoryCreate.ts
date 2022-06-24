import {getGraphqlRequestParams} from "api/common/getGraphqlRequestParams";
import {CreateCategoryInput} from "models/categoryModels";

export const mutationCategoryCreate = (payload: CreateCategoryInput) => {
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

    return getGraphqlRequestParams(query, variables);
}