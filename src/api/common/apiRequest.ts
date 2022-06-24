type ApiRequestParams = {
    url: string,
    method: string,
    body: string | null
}

export const apiRequest = async ({url, method, body}: ApiRequestParams) => {
    const request = await fetch(url, {
        headers: {
            'Content-Type': 'application/json'
        },
        method,
        body
    });

    if (request.ok && request.status === 200)
        return await request.json();

    throw await request.text() || "Unknown error!";
};



