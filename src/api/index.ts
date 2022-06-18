const BASE_URL_GRAPHQL = "https://localhost:7080/graphql";

export const graphqlRequest = async (query: string, variables: unknown) => {
    const request = await fetch(BASE_URL_GRAPHQL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({query, variables})
    });
    console.log(request)
    const json = await request.json();


    if (request.ok && request.status === 200)
        return json;

    throw await request.text() || request.statusText;
}



