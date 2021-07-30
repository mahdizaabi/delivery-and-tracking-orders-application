

export const addToCart = (product, selectedQuanity, selectedVarient) => (dispatch, getState) => {
    const cartItem = {
        id: product.id,
        name: product.name,
        image: product.image,
        selectedVarient, selectedQuanity,
        prices: product.prices,

    }

    dispatch({
        type: "ADD_PRODUCT_TO_CART",
        payload: cartItem
    })

    const cartItems = getState().CartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems))

}