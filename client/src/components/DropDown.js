import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/userAction';



const DropDown = () => {
    const [activ, setActive] = useState(false)
    const dispatch = useDispatch();
    const x = useSelector(state => state.userLoginReducer.user);

    const dropdownShow = activ ? "dropdown-menu show" : "dropdown-menu"
    return (
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" onClick={() => setActive(!activ)} href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {x?.name}
                    </a>
                    <ul className={dropdownShow} dropdownlist aria-labelledby="navbarDarkDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Orders</a></li>
                        <li><Link className="dropdown-item  nav-link" to="/" onClick={() => { 
                            dispatch(logoutUser())
                            window.location.reload();
                            }}>logout</Link></li>
                    </ul>
                </li>
            </ul>
        </div>)
}


export default DropDown;

