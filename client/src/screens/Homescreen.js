import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import pizzas from '../pizzasdata'
import Productcard from '../components/Productcard';
import { getAllProducts } from '../actions/productActions'
export default function Homescreen() {
    const dispatch = useDispatch();
    const productsState = useSelector(state => state.getProductsReducer)
    const { error, products, loading } = productsState;
    useEffect(() => {
        dispatch(getAllProducts());

    }, [])
    const createProductList = () => pizzas.map((item, index) => {
        return (
            <div key={index} className="productcard__box col-md-4 p-4">
                <Productcard product={item} />
            </div>
        )
    });
    return (
        <div className="row container-fluid">
            {loading ?
                (<h1>Loading...</h1>)
                : error ?
                    (<h1>Something went wrong</h1>)
                    : createProductList()}

        </div>
    )
}