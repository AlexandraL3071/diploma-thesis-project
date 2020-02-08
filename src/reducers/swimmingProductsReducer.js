import {
    FETCH_SWIMMING_PRODUCTS,
} from "../actions/actionsNames";

export const swimmingProductsReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_SWIMMING_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
};
