import {getGraphqlRequestParams} from "api/common/getGraphqlRequestParams";

export const queryCategoriesAll = () => {
    const query = `
        query categoriesAll {
            categories {
                list {
                    id,
                    name
                }
            }
        }
    `;

    return getGraphqlRequestParams(query);
}