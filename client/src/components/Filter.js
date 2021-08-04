import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';


const Filter = ({ searchTermFromFilterComponent }) => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const [categorie, setCategorie] = useState("all");


    useEffect(() => {

        searchTermFromFilterComponent(searchTerm, categorie)

    }, [searchTerm, categorie])



    /* input changer -> state change -> rerender -> this function getExecuted*/

    return (
        <div className="row shadow-lg p-3 mb-5 bg-white rounded d-flex m-auto justify-content-center align-items-center">
            <div className="className col-md-3 d-flex align-items-center">
                <input className="form-control"
                    type="text" name="" id="" placeholder="search product"
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                    }}
                />
            </div>


            <div className="col-md-3 mt-2">
                <select className="form-control"
                    value={categorie}
                    onChange={(e) => {
                        setCategorie(e.target.value)
                    }}>
                    <option value="all">All</option>
                    <option value="veg">veg</option>
                    <option value="nonveg">nonveg</option>
                </select>
            </div>

            <div className="col-md-3 mt-2">
                <button className="form-control btn" style={{ backgroundColor: "red" }}>Filter</button>
            </div>

        </div>
    )
}

export default Filter;