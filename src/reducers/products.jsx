import * as Types from '../constrants/ActionTypes';

var initialState = [];

const products = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_PRODUCT:
            state = action.products;
            return [...action.products];
        case Types.DELETE_PRODUCT:
            return state.filter(product => product.id !== action.id);
        case Types.ADD_PRODUCT:
            return [...state, action.product];
        case Types.UPDATE_PRODUCT:
            return state.map(product =>
                product.id === action.product.id ? action.product : product
            );
        default:
            return [...state];
    }
};


export default products;    