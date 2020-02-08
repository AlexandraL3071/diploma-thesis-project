import {FETCH_SWIMMING_PRODUCTS} from "./actionsNames";

export const fetchSwimmingProductsAction = (products) => {
    return {
        type: FETCH_SWIMMING_PRODUCTS,
        payload: products
    }
};
