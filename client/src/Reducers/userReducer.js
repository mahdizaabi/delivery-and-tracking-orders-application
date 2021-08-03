

const INITIAL_STATE = {}

export const userRegistrationReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "USER_REGISTRATION_REQUEST":
            return ({
                ...state,
                loading: true
            })
        case "USER_REGISTRATION_SUCCESSFULL":
            return ({
                ...state,
                loading: false,
                success: true
            })
        case "USER_REGISTRATION_FAILED":
            return ({
                ...state,
                loading: false,
                error: action.payload
            })
        default:
            return state
    }
}



export const userLoginReducer = (state = { loading: false, error: '', success: false }, action) => {
    switch (action.type) {
        case "USER_LOGIN_REQUEST":
            return ({ ...state, loading: true });
        case "USER_LOGIN_SUCCESSFULL":

            return ({
                ...state,
                loading: false,
                success: true,
                user: action.payload
            })
        case "USER_LOGIN_FAILED":
            return ({
                loading: false,
                error: action.payload
            })
        case "USER_LOGOUT":
            return ({
                laoding: false,
                success: false
            })
        default:
            return state
    }
}