import * as Types from '../constrants/ActionTypes';

const varinitState = [];

const itemEditing = (state = varinitState, action) => {
    switch (action.type) {
        case Types.EDIT_PRODUCT:
            return action.product;
        default:
            return state;
    }
}

export default itemEditing;