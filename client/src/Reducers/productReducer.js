

const INITIAL_STATE = {}
export const getProductsReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'GET_PRODUCTS_REQUESTS':
            return ({ ...state })
        case 'GET_PRODUCTS_SUCCESS':
            return ({
                products: action.payload
            })
        case 'GET_PRODUCTS_FAILED':
            return ({
                error: action.payload
            })
        default:
            return state
    }

}