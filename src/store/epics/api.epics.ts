import {catchError, filter, from, map, mergeMap, Observable, of} from "rxjs";

import {apiRequest} from "api/common/apiRequest";
import {apiActionCreators} from "../actions/api.actions";
import {ApiActionTypes, ApiRequestAction} from "../types/api.types";

export const apiRequestEpic = (action$: Observable<ApiRequestAction>) => {
    return action$.pipe(
        filter(({type}) => type.includes(ApiActionTypes.API_REQUEST)),
        mergeMap(action => {
            const {url, method, feature} = action.meta;

            return from(apiRequest({body: action.payload, url, method}))
                .pipe(
                    map(json => apiActionCreators.apiSuccess({response: json, feature})),
                    catchError(error => of(apiActionCreators.apiError({error, feature})))
                );
        })
    );
};

export const apiEpics = [
    apiRequestEpic
];