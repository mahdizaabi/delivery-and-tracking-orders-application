

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

 

const getAllOrdersReducerInitialState = { orders: [], loading: true, error: false, }
export const getAllOrdersReducer = (state = getAllOrdersReducerInitialState, action) => {

    switch (action.type) {
        case 'GET_USERORDERS_REQUESTS':
            return ({
                loading: true,
                ...state
            })
        case 'GET_USERORDERS_SUCCESS':
            return ({
                ...state,
                loading: false,
                orders: action.payload
            })
        case 'GET_USERORDERS_FAILED':
            return ({
                ...state,
                loading: false,
                error: action.payload
            })
        default:
            return state
    }

}

