import axios from "axios"

export const getAllProducts = () => async (dispatch, getState) => {
    dispatch({
        type: 'GET_PRODUCTS_REQUESTS',
    })
    try {
        const products = await axios.get('api/products/getallproducts');
        dispatch({
            type: 'GET_PRODUCTS_SUCCESS',
            payload: products.data
        })
    } catch (e) {
        dispatch({
            type: 'GET_PRODUCTS_FAILED',
            payload: { error: e.message }
        })
    }



}