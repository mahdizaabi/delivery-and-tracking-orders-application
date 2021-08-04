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

export const filterProducts = (searchTerm, category) => async (dispatch, getState) => {
    await dispatch(getAllProducts());

    const allProducts = category === "all" ? getState().getProductsReducer.products :
        getState().getProductsReducer.products.filter(product => product.category === category)
    dispatch({
        type: 'GET_FILTRED_PRODUCTS_REQUEST'
    })
    dispatch({
        type: 'GET_FILTRED_PRODUCTS',
        payload: allProducts?.filter(product => product.name.toLowerCase().includes(searchTerm))
    })


}