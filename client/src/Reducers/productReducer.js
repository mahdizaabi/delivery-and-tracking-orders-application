

const INITIAL_STATE = { products: [] }
export const getProductsReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'GET_PRODUCTS_REQUESTS':
            return ({
                loading: true,
                ...state
            })
        case 'GET_PRODUCTS_SUCCESS':
            return ({
                loading: false,
                products: action.payload
            })
        case 'GET_PRODUCTS_FAILED':
            return ({
                loading: false,
                error: action.payload
            })
        default:
            return state
    }

}