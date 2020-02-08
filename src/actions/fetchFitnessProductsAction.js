import {FETCH_FITNESS_PRODUCTS} from "./actionsNames";

export const fetchFitnessProductsAction = (products) => {
    return {
        type: FETCH_FITNESS_PRODUCTS,
        payload: products
    }
};
