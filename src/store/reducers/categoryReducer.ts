import {CategoryState, CategoryAction, CategoryActionTypes} from "types/categoryTypes";

const initialState: CategoryState = {
    categories: [
        {
            id: 0,
            name: 'Education'
        },
        {
            id: 1,
            name: 'Rest'
        }
    ],
    nextCreateCategoryId: 2
}

export const categoryReducer = (state = initialState, action: CategoryAction): CategoryState => {
    switch (action.type) {
        case CategoryActionTypes.CREATE_CATEGORY:
            return {
                ...state,
                nextCreateCategoryId: state.nextCreateCategoryId + 1,
                categories: [...state.categories, {
                    id: state.nextCreateCategoryId,
                    ...action.payload,
                }]
            };
        default:
            return state;
    }
}