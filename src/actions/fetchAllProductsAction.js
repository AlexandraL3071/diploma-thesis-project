import {FETCH_ALL_PRODUCTS} from "./actionsNames";

export const fetchAllProductsAction = (products) => {
    return {
        type: FETCH_ALL_PRODUCTS,
        payload: products
    }
}
