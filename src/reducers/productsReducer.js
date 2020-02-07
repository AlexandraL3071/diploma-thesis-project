import {ADD_TO_CART, FETCH_ALL_PRODUCTS} from "../actions/actionsNames";

export const productsReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_ALL_PRODUCTS:
            return action.payload;
        case ADD_TO_CART:
            return action.payload;
        default:
            return state;
    }
};
