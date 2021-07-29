import React from 'react'
import pizzas from '../pizzasdata'
import Productcard from '../components/Productcard'
export default function Homescreen() {
    const createProductList = () => pizzas.map((item,index) => {
        return (
            <div key={index} className="productcard__box col-md-4 p-4">
                    <Productcard product={item} />
            </div>
        )
    });
    return (
        <div className="row container-fluid">
            {createProductList()}
        </div>
    )
}