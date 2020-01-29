import {DELETE_FROM_CART} from "./actionsNames";

export const deleteFromCartAction = (product) => {
    return {
        type: DELETE_FROM_CART,
        payload: product
    }
}
