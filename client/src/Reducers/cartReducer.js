

const INITIAL_STATE = { cartItems: [] }
export const CartReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'ADD_PRODUCT_TO_CART':
            const filtredState = state.cartItems.filter(item => item.id !== action.payload.id)
            return ({
                ...state,
                cartItems: [...filtredState, action.payload]
            })
        case 'INCREMENT_PRODUCT':
            const newCartItemsState = state.cartItems.map(item => item.id === action.payload ? { ...item, selectedQuanity: (parseFloat(item.selectedQuanity)+1)  } : item)
            return ({
                ...state,
                cartItems: [...newCartItemsState]
            })

        case 'DECREMENT_PRODUCT':
            const newCartItemsStated = state.cartItems.map(item => item.id === action.payload ? { ...item, selectedQuanity: item.selectedQuanity - 1 } : item)
            return ({
                ...state,
                cartItems: [...newCartItemsStated]
            })
            case 'DELETE_ORDER':
                const newOrders = state.cartItems.filter(item=> (item.id) !== action.payload)
                return ({
                    ...state,
                    cartItems: [...newOrders]
                })

        default:
            return state
    }

}