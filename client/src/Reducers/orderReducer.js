

const INITIAL_STATE = {}

export const orderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "PLACE_ORDER_REQUEST":
            return ({
                ...state,
                loading: true
            })
        case "PLACE_ORDER_SUC":
            return ({
                ...state,
                loading: false,
                success: true
            })
        case "PLACE_ORDER_FAILED":
            return ({
                ...state,
                loading: false,
                error: action.payload
            })
        default:
            return state
    }
}



