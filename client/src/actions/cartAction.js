

export const addToCart = (product, selectedQuanity, selectedVarient) => (dispatch, getState) => {
    const cartItem = {
        id: product._id,
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

export const incrementProduct = (id, selectedQuanity) => (dispatch, getState) => {
    if (selectedQuanity === 10) { return }

    dispatch({
        type: "INCREMENT_PRODUCT",
        payload: id
    })
}

export const decrementProduct = (id, selectedQuanity) => (dispatch, getState) => {
    if (selectedQuanity === 0) { return }

    dispatch({
        type: "DECREMENT_PRODUCT",
        payload: id
    })
}


export const deleteOrder = (id,selectedQuanity) => (dispatch, getState) => {
    dispatch({
        type: "DELETE_ORDER",
        payload: id
    })
    const cartItems = getState().CartReducer.cartItems;
    localStorage.setItem('cartItems', JSON.stringify(cartItems))

}