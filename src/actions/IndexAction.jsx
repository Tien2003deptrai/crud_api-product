import * as Types from '../constrants/ActionTypes';
import callApi from './../utils/apiCaller';

export const action__FetchProduct__Request = () => {
    return (dispatch) => {
        return callApi('products', 'GET', null).then((response) => {
            dispatch(action__FetchProduct(response.data));
        });
    };
}

export const action__FetchProduct = (products) => {
    return {
        type: Types.FETCH_PRODUCT,
        products
    };
}

export const action__DeleteProduct__Request = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'DELETE', null).then((response) => {
            dispatch(action__DeleteProduct(id));
        });
    };
}
export const action__DeleteProduct = (id) => {
    return {
        type: Types.DELETE_PRODUCT,
        id
    };
}

export const action__AddProduct__Request = (product) => {
    return (dispatch) => {
        return callApi('products', 'POST', product).then((response) => {
            dispatch(action__AddProduct(response.data));
        });
    };
}
export const action__AddProduct = (product) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    };
}

export const action__GetProduct__Request = (id) => {
    return (dispatch) => {
        return callApi(`products/${id}`, 'GET', null).then((response) => {
            dispatch(action__GetProduct(response.data));
        });
    };
}

// GET product store
export const action__GetProduct = (product) => {
    return {
        type: Types.EDIT_PRODUCT,
        product
    };
}

export const action__UpdateProduct__Request = (product) => {
    return (dispatch) => {
        return callApi(`products/${product.id}`, 'PUT', product).then((response) => {
            dispatch(action__UpdateProduct(response.data));
        });
    };
}

// GET product store
export const action__UpdateProduct = (product) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    };
}


