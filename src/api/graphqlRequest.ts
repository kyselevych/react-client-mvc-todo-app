const BASE_URL_GRAPHQL = process.env.REACT_APP_GRAPHQL_URL!;

export const graphqlRequest = async (query: string, variables?: unknown) => {
    const request = await fetch(BASE_URL_GRAPHQL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({query, variables})
    });

    if (request.ok && request.status === 200)
        return await request.json();

    throw await request.text() || request.statusText;
}



