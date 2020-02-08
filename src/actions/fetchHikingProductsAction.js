import {FETCH_HIKING_PRODUCTS} from "./actionsNames";

export const fetchHikingProductsAction = (products) => {
    return {
        type: FETCH_HIKING_PRODUCTS,
        payload: products
    }
};
