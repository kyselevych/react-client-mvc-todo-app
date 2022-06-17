import {catchError, map, mergeMap, Observable, of, from} from "rxjs";
import {ofType} from "redux-observable";
import {FetchTasksPayload, TaskActionTypes} from "../types/taskTypes";
import {taskActionCreators} from 'store/actions/taskActions';
import {queryTasksAll} from "api/tasks/queryTasksAll";
import {RootAction} from "../types";

export const fetchTasksEpic = (action$: Observable<RootAction>): Observable<RootAction> => {
    return action$.pipe(
        ofType(TaskActionTypes.FETCH_TASKS),
        mergeMap(action =>
            from(queryTasksAll(action.payload as FetchTasksPayload)).pipe(
                map(json => taskActionCreators.fetchTasksSuccess(json.data.tasks.all)),
                catchError(err => of(taskActionCreators.fetchTasksFailure(err)))
            )
        )
    )
}