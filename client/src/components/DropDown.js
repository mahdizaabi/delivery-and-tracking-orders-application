import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/userAction';



const DropDown = () => {
    const [activ, setActive] = useState(false)
    const dispatch = useDispatch();


    const refContainer = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (refContainer.current && !refContainer.current.contains(event.target)) {
                setActive(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [refContainer])

    const x = useSelector(state => state.userLoginReducer.user);


    const dropdownShow = activ ? "dropdown-menu show" : "dropdown-menu"
    return (
        <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
            <ul className="navbar-nav">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" onClick={() => setActive(!activ)} href="###" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {x?.name}
                    </a>
                    <ul onClick={()=>setActive(!activ)} className={dropdownShow} ref={refContainer} dropdownlist aria-labelledby="navbarDarkDropdownMenuLink">
                        <li><Link className="dropdown-item  nav-link" to="/orderstracker">Orders tracker</Link></li>
                        <li>
                            <Link className="dropdown-item  nav-link" to="/"
                            onClick={() => {
                            dispatch(logoutUser())
                            window.location.reload();}}
                        >Logout</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>)
}


export default DropDown;

