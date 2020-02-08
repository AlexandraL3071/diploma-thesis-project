import {
    FETCH_HIKING_PRODUCTS,
} from "../actions/actionsNames";

export const hikingProductsReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_HIKING_PRODUCTS:
            return action.payload;
        default:
            return state;
    }
};
