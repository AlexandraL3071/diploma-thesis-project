import {
    FETCH_FITNESS_PRODUCTS,
} from "../actions/actionsNames";

export const fitnessProductsReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_FITNESS_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
};
