import {rootReducer} from "./reducers";
import {configureStore} from "./configureStore";

export const store = configureStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;