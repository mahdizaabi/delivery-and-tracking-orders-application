import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';


function Productcard({ product }) {

    /******Application state******/
    const [quantity, setQuantity] = useState(0);
    const [varient, setVarient] = useState("small");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    /*******************************/


    /*Generate select-options list*/
    const createOptionsList = (options) =>
        options.map((option, index) => <option key={index} value={option}>{option}</option>)

    const calculatePrice = (quantity, varientPrice) => quantity * varientPrice;

    const { name, image, varients, prices } = product;

    return (
        <div className="m-1 shadow p-1 mb-5 bg-white rounded productcard d-flex flex-column align-items-center align-items-center">

            <div className="productcard__header d-flex flex-column align-items-center align-items-center" onClick={() => handleShow()}>
                <h1>{name}</h1>
                <img src={image} alt="product_image" className="img-fluid" style={{ height: "200px", width: "200px" }} />
            </div>

            {/*  options */}
            <div className="options d-flex w-100 flex-row justify-content-lg-around justify-content-between m-10">
                <div className="text-left">
                    <p>Varients</p>
                    <select className="varient__selection" value={varient} onChange={(e) => setVarient(e.target.value)}>
                        {createOptionsList(varients)}
                    </select>
                </div>
                <div >
                    <p>Quantity</p>
                    <select className="quantity__selection" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                        {createOptionsList([...Array(10).keys()])}
                    </select>
                </div>

            </div>
            {/*  Prices and add to card */}

            <div className="options p-2 d-flex w-100 flex-row justify-content-lg-around
            justify-content-between m-10
            align-items-center">
                <div className="price">
                    <h1>Price: {calculatePrice(quantity, prices[0][varient])}</h1>
                </div>

                <div className="payement">
                    <button className="btn bg-danger">Add to card</button>
                </div>
            </div>

            {/**Modela ****/}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <button className="btn">close</button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default Productcard;