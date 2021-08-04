import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import pizzas from '../pizzasdata'
import Productcard from '../components/Productcard';
import { getAllProducts,filterProducts } from '../actions/productActions'
import Spinner from '../components/Spinner';
import Filter from '../components/Filter';
export default function Homescreen() {
    const dispatch = useDispatch();
    const productsState = useSelector(state => state.getProductsReducer)
    const { error, products, loading } = productsState;
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch])



    const searchTermFromFilterComponent = (searchTerm, category) => {
        console.log(category)
        dispatch(filterProducts(searchTerm, category))
    }

    const createProductList = () => products.map((item, index) => {
        return (
            <div key={index} className="productcard__box col-md-4 p-4">
                <Productcard product={item} />
            </div>
        )
    });
    return (
        <div className="container">
            <Filter searchTermFromFilterComponent={searchTermFromFilterComponent}></Filter>
            <div className="row m-auto p-2 justify-content-center">

                {loading ?
                    (<Spinner></Spinner>)
                    : error ?
                        (<h1>{error.error}</h1>)
                        : createProductList()}

            </div>
        </div>
    )
}

const MemoizedSubComponent = React.memo(Productcard);