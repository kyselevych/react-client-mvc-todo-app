export enum ApiActionTypes {
    API_REQUEST = "API_REQUEST",
    API_SUCCESS = "API_SUCCESS",
    API_ERROR = "API_ERROR"
}

export type ApiRequestMeta = {
    url: string,
    method: string,
    feature: string
}

export type ApiSuccessMeta = {
    feature: string
}

export type ApiErrorMeta = {
    feature: string
}

export type ApiRequestAction = {
    type: `${string}_${ApiActionTypes.API_REQUEST}`,
    payload: string | null,
    meta: ApiRequestMeta
}

export type ApiSuccessAction = {
    type: `${string}_${ApiActionTypes.API_SUCCESS}`,
    payload: any,
    meta: ApiSuccessMeta
}

export type ApiErrorAction = {
    type: `${string}_${ApiActionTypes.API_ERROR}`,
    payload: string | null,
    meta: ApiErrorMeta
}

export type ApiAction = ApiRequestAction | ApiSuccessAction | ApiErrorAction;