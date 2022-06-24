import {ApiActionTypes, ApiErrorAction, ApiRequestAction, ApiSuccessAction} from "../types/api.types";

export type ApiRequestParams = {
    body: string,
    method: string,
    url: string,
    feature: string
}

export type ApiSuccessParams = {
    response: unknown,
    feature: string
}

export type ApiErrorParams = {
    error: string,
    feature: string
}

export const apiActionCreators = {
    apiRequest: ({body, method, url, feature}: ApiRequestParams): ApiRequestAction => {
        return {
            type: `${feature}_${ApiActionTypes.API_REQUEST}`,
            payload: body,
            meta: {
                method,
                url,
                feature
            }
        }
    },
    apiSuccess: ({response, feature}: ApiSuccessParams): ApiSuccessAction => {
        return {
            type: `${feature}_${ApiActionTypes.API_SUCCESS}`,
            payload: response,
            meta: {feature}
        }
    },
    apiError: ({error, feature}: ApiErrorParams): ApiErrorAction => {
        return {
            type: `${feature}_${ApiActionTypes.API_ERROR}`,
            payload: error,
            meta: {feature}
        }
    }
};