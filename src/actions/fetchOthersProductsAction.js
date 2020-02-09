import {FETCH_OTHERS_PRODUCTS} from "./actionsNames";

export const fetchOthersProductsAction = (products) => {
    return {
        type: FETCH_OTHERS_PRODUCTS,
        payload: products
    }
};
