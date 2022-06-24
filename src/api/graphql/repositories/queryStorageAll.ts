import {getGraphqlRequestParams} from "api/common/getGraphqlRequestParams";

export const queryStorageAll = () => {
    const query = `
        query storageAll {
            storage {
                list {
                    number,
                    type
                }           
            }
        }
    `;

    return getGraphqlRequestParams(query);
}