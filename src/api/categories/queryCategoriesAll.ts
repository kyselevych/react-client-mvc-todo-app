import {graphqlRequest} from "api";

export const queryCategoriesAll = async () => {
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

    return await graphqlRequest(query);
}