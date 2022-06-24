import {graphqlRequest} from "api/graphqlRequest";

export const queryStorageAll = async () => {
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

    return await graphqlRequest(query);
}