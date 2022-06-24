import {getGraphqlRequestParams} from "api/common/getGraphqlRequestParams";

export const mutationStorageSwitch = (storageType: string) => {
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

    return getGraphqlRequestParams(query, variables);
}