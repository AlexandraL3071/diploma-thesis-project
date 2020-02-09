import {
    FETCH_TENNIS_PRODUCTS,
} from "../actions/actionsNames";

export const tennisProductsReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_TENNIS_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
};
