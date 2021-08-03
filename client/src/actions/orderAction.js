import axios from "axios";

export const placeOrder = (token, subtotal) => async (dispatch, getState) => {

    const currentUser = getState().userLoginReducer.user;
    const cartItems = getState().CartReducer.cartItems;
    dispatch({ type: "PLACE_ORDER_REQUEST" })

    try {
        const request = axios.post("/api/orders/placeorder", { token, subtotal, currentUser, cartItems })
        dispatch({
            type: "PLACE_ORDER_SUC",
            payload: request.data
        })
        
    } catch (e) {

        dispatch({
            type: "PLACE_ORDER_FAIL",
            payload: e.message
        })
        console.log(e.message)
    }
}