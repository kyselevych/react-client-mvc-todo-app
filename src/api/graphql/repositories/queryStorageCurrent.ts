import {getGraphqlRequestParams} from "api/common/getGraphqlRequestParams";

export const queryStorageCurrent = () => {
    const query = `
        query storageCurrent {
            storage {
                current {
                    number,
                    type
                }           
            }
        }
    `;

    return getGraphqlRequestParams(query);
}