

const INITIAL_STATE = { cartItems: [] }
export const CartReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            const filtredState = state.cartItems.filter(item => item.id !==action.payload.id)
            return ({
                ...state,
                cartItems: [...filtredState, action.payload]
            })

        default:
            return state
    }

}