import {createStore} from 'redux';
import {rootReducer} from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";

export const store = createStore(rootReducer, composeWithDevTools());

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;