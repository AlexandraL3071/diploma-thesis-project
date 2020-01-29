import {ADD_TO_CART} from "./actionsNames";

export const addToCartAction = (product) => {
    return {
        type: ADD_TO_CART,
        payload: product
    }
}
