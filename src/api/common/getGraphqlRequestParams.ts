import {getGraphqlBodyRequest} from "./getGraphqlBodyRequest";

export const getGraphqlRequestParams = (query: string, variables?: unknown) => {
    const urlGraphql = process.env.REACT_APP_GRAPHQL_URL!;
    const bodyRequest = getGraphqlBodyRequest(query, variables);

    return {
        url: urlGraphql,
        method: "POST",
        body: bodyRequest
    };
}