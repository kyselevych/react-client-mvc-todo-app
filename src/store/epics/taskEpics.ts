import {catchError, map, mergeMap, Observable, of, from} from "rxjs";
import {ofType} from "redux-observable";

import {CreateTaskInput, FetchTasksInput, Task} from "models/taskModels";
import {RootAction} from "../types";
import {TaskActionTypes} from "../types/taskTypes";

import {mutationTaskCreate, mutationTaskDelete, mutationTaskPerform, queryTasksAll} from "api/tasks";
import {taskActionCreators} from 'store/actions/taskActions';

export const fetchTasksEpic = (action$: Observable<RootAction>): Observable<RootAction> => {
    return action$.pipe(
        ofType(TaskActionTypes.FETCH_TASKS),
        mergeMap(action =>
            from(queryTasksAll(action.payload as FetchTasksInput)).pipe(
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
            from(mutationTaskCreate(action.payload as CreateTaskInput)).pipe(
                map(json => taskActionCreators.createTaskSuccess(json.data.tasks.createTask as Task)),
                catchError(err => of(taskActionCreators.createTaskFailure(err)))
            )
        )
    )
};

export const deleteTaskEpic = (action$: Observable<RootAction>): Observable<RootAction> => {
    return action$.pipe(
        ofType(TaskActionTypes.DELETE_TASK),
        mergeMap(action =>
            from(mutationTaskDelete(action.payload as number)).pipe(
                map(json => taskActionCreators.deleteTaskSuccess(action.payload as number)),
                catchError(err => of(taskActionCreators.deleteTaskFailure(err)))
            )
        )
    )
};

export const performTaskEpic = (action$: Observable<RootAction>): Observable<RootAction> => {
    return action$.pipe(
        ofType(TaskActionTypes.PERFORM_TASK),
        mergeMap(action =>
            from(mutationTaskPerform(action.payload as number)).pipe(
                map(json => taskActionCreators.performTaskSuccess(json.data.tasks.performTask as Task)),
                catchError(err => of(taskActionCreators.performTaskFailure(err)))
            )
        )
    )
};

const taskEpics = [
    fetchTasksEpic,
    createTaskEpic,
    deleteTaskEpic,
    performTaskEpic
];

export default taskEpics;