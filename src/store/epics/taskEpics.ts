import {catchError, map, mergeMap, Observable, of, from} from "rxjs";
import {ofType} from "redux-observable";

import {RootAction} from "../types";
import {CreateTaskPayload, FetchTasksPayload, TaskActionTypes} from "../types/taskTypes";
import {Task} from "models/taskModels";

import {taskActionCreators} from 'store/actions/taskActions';
import {queryTasksAll} from "api/tasks/queryTasksAll";
import {mutationTaskCreate} from "api/tasks/mutationTaskCreate";


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
};

export const createTaskEpic = (action$: Observable<RootAction>): Observable<RootAction> => {
    return action$.pipe(
        ofType(TaskActionTypes.CREATE_TASK),
        mergeMap(action =>
            from(mutationTaskCreate(action.payload as CreateTaskPayload)).pipe(
                map(json => taskActionCreators.createTaskSuccess(json.data.tasks.createTask as Task)),
                catchError(err => of(taskActionCreators.createTaskFailure(err)))
            )
        )
    )
};