import {
    FETCH_OTHERS_PRODUCTS,
} from "../actions/actionsNames";

export const othersProductsReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_OTHERS_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
};
