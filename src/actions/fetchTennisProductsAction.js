import {FETCH_TENNIS_PRODUCTS} from "./actionsNames";

export const fetchTennisProductsAction = (products) => {
    return {
        type: FETCH_TENNIS_PRODUCTS,
        payload: products
    }
};
