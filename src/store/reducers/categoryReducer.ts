import {CategoryAction, CategoryActionTypes, CategoryState} from "store/types/categoryTypes";

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
        case CategoryActionTypes.DELETE_CATEGORY:
            return {
                ...state,
                categories: [...state.categories.filter(category => category.id !== action.payload)]
            }
        case CategoryActionTypes.EDIT_CATEGORY:
            return {
                ...state,
                categories: state.categories.map(category => {
                    if (category.id === action.payload.id) {
                        return {...category, name: action.payload.name}
                    }

                    return category;
                })
            }
        default:
            return state;
    }
}