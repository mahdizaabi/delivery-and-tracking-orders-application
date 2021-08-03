import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import pizzas from '../pizzasdata'
import Productcard from '../components/Productcard';
import { getAllProducts } from '../actions/productActions'
import Spinner from '../components/Spinner';


export default function Homescreen() {
    const dispatch = useDispatch();
    const productsState = useSelector(state => state.getProductsReducer)
    const { error, products, loading } = productsState;

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch])
    
    const createProductList = () => products.map((item, index) => {
        return (
            <div key={index} className="productcard__box col-md-4 p-4">
                <Productcard product={item} />
            </div>
        )
    });
    return (
        <div className="row container m-auto p-2 justify-content-center">
            {loading ?
                (<Spinner></Spinner>)
                : error ?
                    (<h1>{error.error}</h1>)
                    : createProductList()}

        </div>
    )
}

const MemoizedSubComponent = React.memo(Productcard);
