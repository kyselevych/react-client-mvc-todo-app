import {graphqlRequest} from "api/graphqlRequest";

export const mutationStorageSwitch = async (storageType: string) => {
    const query = `
        mutation storageSwitch($storageSwitch: StorageSwitchInputType!) {
            storage {
                switch(storageSwitchInputType: $storageSwitch) {
                    type
                }
            }
        }
    `;

    const variables = {
        storageSwitch: {
            type: storageType
        }
    }

    return await graphqlRequest(query, variables);
}