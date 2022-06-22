import {graphqlRequest} from "api/graphqlRequest";

export const queryStorageCurrent = async () => {
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

    return await graphqlRequest(query);
}