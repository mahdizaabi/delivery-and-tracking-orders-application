import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../actions/userAction';
import Spinner from '../components/Spinner'


const RegisterScreen = () => {

    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')

     const {loading, success,error} = useSelector(state=>state.userRegistrationReducer)
    const authenticationStatus = useSelector(state=>state.userRegistrationReducer.success)
    const register = () => {
        if (password !== confirmedPassword) {
            alert("password don't match")
        }
        else {
            const newUser = {
                name, email, password
            }
            dispatch(registerUser(newUser))
        }
    }

    return (
        <div className="container">
            <div className="registerscreen row justify-content-center mt-5">
                <div className="col-md-5 mt-5">
                    <h2 style={{ "fontSize": '35px' }}>Register</h2>
                    <div className="form">
                        <input type="text" onChange={e => setName(e.target.value)} value={name} name="" id="name" placeholder="name" className="form-control" />
                        <input type="email" onChange={e => setEmail(e.target.value)} value={email} name="" id="email" placeholder="email" className="form-control" />
                        <input type="password" onChange={e => setPassword(e.target.value)} value={password} name="" id="password" placeholder="password" className="form-control" />
                        <input type="password" name="" onChange={e => setConfirmedPassword(e.target.value)} value={confirmedPassword} id="confirmedpassword" placeholder="confirm password" className="form-control" />
                        <div className="d-flex justify-content-end align-items-center pt-2">
                            <button className="btn bg-danger" onClick={register}>Register</button>
                        </div>
                        {loading && <Spinner></Spinner>}
                        {authenticationStatus && <p>Succeffull registration</p>}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default RegisterScreen;