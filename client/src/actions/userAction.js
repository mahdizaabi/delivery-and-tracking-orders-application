
import axios from 'axios'
import history from '../history';

export const registerUser = (newUser) => async (dispatch, getState) => {

    dispatch({
        type: "USER_REGITER_REQUEST",
    })
    try {
        const response = await axios.post('/api/users/register', { ...newUser })
        dispatch({
            type: "USER_REGISTRATION_SUCCESSFULL"
        })

        history.push("/login");

    } catch (e) {
        dispatch({
            type: "USER_REGISTRATION_FAILED",
            payload: e.message
        })
    }
}

export const loginUser = (user) => async (dispatch, getState) => {
    dispatch({ type: "USER_LOGIN_REQUEST" })

    try {
        const response = await axios.post('api/users/login', { ...user })
        dispatch({
            type: "USER_LOGIN_SUCCESSFULL",
            payload: response.data
        })
        localStorage.setItem('userIsLoggedIn', JSON.stringify(response.data))
        history.push("/");

    } catch (e) {
        dispatch({
            type: "USER_LOGIN_FAILED",
            payload: e.message
        })
    }

}

export const logoutUser = (user) => async (dispatch, getState) => {
    dispatch({ type: "USER_LOGOUT" })
    localStorage.removeItem('userIsLoggedIn');
    

}