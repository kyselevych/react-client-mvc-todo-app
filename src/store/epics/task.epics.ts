import {mergeMap, Observable, of} from "rxjs";
import {ofType} from "redux-observable";

import {
    CreateTaskAction,
    FetchTasksAction, PerformTaskAction,
    RemovalTaskAction,
    TaskActionTypes
} from "../types/task.types";
import {ApiActionTypes, ApiSuccessAction} from "../types/api.types";
import {Task} from "models/taskModels";

import {apiActionCreators} from "../actions/api.actions";
import {taskActionCreators} from "../actions/tasks.actions";
import {mutationTaskCreate, mutationTaskDelete, mutationTaskPerform, queryTasksAll} from "api/graphql/tasks";



export const fetchTasksEpic = (action$: Observable<FetchTasksAction>) => {
    return action$.pipe(
        ofType(TaskActionTypes.FETCH_TASKS),
        mergeMap(action => {
            const apiRequestParams = {...queryTasksAll(action.payload), feature: TaskActionTypes.FETCH_TASKS};

            return of(
                apiActionCreators.apiRequest(apiRequestParams)
            );
        })
    )
};

export const fetchTasksSuccessEpic = (action$: Observable<ApiSuccessAction>) => {
    return action$.pipe(
        ofType(`${TaskActionTypes.FETCH_TASKS}_${ApiActionTypes.API_SUCCESS}`),
        mergeMap(action =>
            of(taskActionCreators.setTasks(action.payload.data.tasks.all as Task[]))
        )
    )
};

export const createTaskEpic = (action$: Observable<CreateTaskAction>) => {
    return action$.pipe(
        ofType(TaskActionTypes.CREATE_TASK),
        mergeMap(action => {
            const apiRequestParams = {...mutationTaskCreate(action.payload), feature: TaskActionTypes.CREATE_TASK};

            return of(
                apiActionCreators.apiRequest(apiRequestParams)
            );
        })
    )
};

export const createTaskSuccessEpic = (action$: Observable<ApiSuccessAction>) => {
    return action$.pipe(
        ofType(`${TaskActionTypes.CREATE_TASK}_${ApiActionTypes.API_SUCCESS}`),
        mergeMap(action =>
            of(taskActionCreators.putTask(action.payload.data.tasks.createTask as Task))
        )
    )
};

export const removalTaskEpic = (action$: Observable<RemovalTaskAction>) => {
    return action$.pipe(
        ofType(TaskActionTypes.REMOVAL_TASK),
        mergeMap(action => {
            const apiRequestParams = {...mutationTaskDelete(action.payload), feature: TaskActionTypes.REMOVAL_TASK};

            return of(
                apiActionCreators.apiRequest(apiRequestParams)
            );
        })
    )
};

export const removalTaskSuccessEpic = (action$: Observable<ApiSuccessAction>) => {
    return action$.pipe(
        ofType(`${TaskActionTypes.REMOVAL_TASK}_${ApiActionTypes.API_SUCCESS}`),
        mergeMap(action =>
            of(taskActionCreators.removeTask(action.payload.data.tasks.deleteTask.id as number))
        )
    )
};

export const performTaskEpic = (action$: Observable<PerformTaskAction>) => {
    return action$.pipe(
        ofType(TaskActionTypes.PERFORM_TASK),
        mergeMap(action => {
            const apiRequestParams = {...mutationTaskPerform(action.payload), feature: TaskActionTypes.PERFORM_TASK};

            return of(
                apiActionCreators.apiRequest(apiRequestParams)
            );
        })
    )
};

export const performTaskSuccessEpic = (action$: Observable<ApiSuccessAction>) => {
    return action$.pipe(
        ofType(`${TaskActionTypes.PERFORM_TASK}_${ApiActionTypes.API_SUCCESS}`),
        mergeMap(action =>
            of(taskActionCreators.updateTask(action.payload.data.tasks.performTask as Task))
        )
    )
};

export const taskEpics = [
    fetchTasksEpic,
    fetchTasksSuccessEpic,

    createTaskEpic,
    createTaskSuccessEpic,

    removalTaskEpic,
    removalTaskSuccessEpic,

    performTaskEpic,
    performTaskSuccessEpic
];