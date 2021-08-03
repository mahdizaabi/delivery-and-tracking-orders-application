import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementProduct, decrementProduct, deleteOrder } from '../actions/cartAction'


export const OrderCard = ({ id, name, image, selectedVarient, selectedQuanity, prices }) => {
    const calculatePrice = (quantity, varientPrice) => quantity * varientPrice;
    const dispatch = useDispatch();
    return (
        <div key={id} className="ordercard d-flex flex-row align-items-center
         p-1" style={{ position: "relative" }}>
            <div className="ordercard__infos w-75 p-2">
                <h1 className="order__name" style={{ display: "inline" }}>{name} <span className="size">[{selectedVarient}]</span></h1>
                <i className="fa fa-trash" aria-hidden="true" onClick={() => dispatch(deleteOrder(id))} />

                <h1 className="order__price">Price: {selectedQuanity} x {prices[0][selectedVarient]} = {calculatePrice(prices[0][selectedVarient], selectedQuanity)}</h1>
                <h1 style={{ display: "inline" }}>Quantity</h1>

                <div className="icons d-flex align-items-center" style={{ marginLeft: "12px" }}>
                    <i className="fa fa-plus" aria-hidden="true" onClick={() => dispatch(incrementProduct(id, selectedQuanity))} />
                    <b>{selectedQuanity}</b>
                    <i className="fa fa-minus" aria-hidden="true" onClick={() => dispatch(decrementProduct(id,selectedQuanity))} />
                </div>
                <hr />
            </div>

            <div>
                <img src={image} alt="product_image" style={{ height: "80px", width: "80px" }} />
            </div>

            <div>
            </div>
        </div>
    )
}