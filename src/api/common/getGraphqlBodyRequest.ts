export const getGraphqlBodyRequest = (query: string, variables?: unknown) => {
    return JSON.stringify({query, variables});
}