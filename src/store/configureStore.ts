import {createEpicMiddleware} from "redux-observable";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers";
import {rootEpic} from "./epics";
import {composeWithDevTools} from "redux-devtools-extension";

const epicMiddleware = createEpicMiddleware();

const middlewares = [epicMiddleware];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);

export const configureStore = () => {
    const store = createStore(
        rootReducer,
        composedEnhancers
    );

    epicMiddleware.run(rootEpic);

    return store;
}