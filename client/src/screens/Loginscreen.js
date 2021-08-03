import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser,loginUser } from '../actions/userAction';
import { Link } from 'react-router-dom';



const LoginScreen = () => {
    const dispatch = useDispatch()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = () => dispatch(loginUser({email, password}))
    return (
        <div className="container loginscreen">
            <div className="registerscreen row justify-content-center mt-5">
                <div className="col-md-5 mt-5">
                    <h2 style={{ "fontSize": '35px' }}>Login</h2>
                    <div className="form">
                        <input type="email" onChange={e => setEmail(e.target.value)} value={email} name="" id="email" placeholder="email" className="form-control" />
                        <input type="password" onChange={e => setPassword(e.target.value)} value={password} name="" id="password" placeholder="password" className="form-control" />
                        <div className="d-flex justify-content-between align-items-center pt-2">
                        <Link className="nav-link" to="/register">you still don't have an account? click <span style={{color:"red", textDecoration:"underline"}}>here</span></Link>
                            <button className="btn bg-danger" onClick={login}>sign in</button>

                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default LoginScreen;