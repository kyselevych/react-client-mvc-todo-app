import {CategoryAction, CategoryActionTypes, CategoryState} from "store/types/category.types";

const initialState: CategoryState = [];

export const categoryReducer = (state = initialState, action: CategoryAction): CategoryState => {
    switch (action.type) {
        case CategoryActionTypes.SET_CATEGORIES:
            return action.payload;

        case CategoryActionTypes.PUT_CATEGORY:
            return [...state, action.payload];

        case CategoryActionTypes.REMOVE_CATEGORY:
            return state.filter(category => category.id !== action.payload);

        case CategoryActionTypes.UPDATE_CATEGORY:
            return state.map(category => {
                if (category.id === action.payload.id)
                    return action.payload;
                else
                    return category;
            });

        default:
            return state;
    }
}