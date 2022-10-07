import {
    LOGIN_REQUEST , 
    LOGIN_SUCCESS ,
    LOGIN_FAIL ,
    REGISTER_REQUEST ,
    REGISTER_SUCCESS , 
    REGISTER_FAIL 
} from '../constants/authConstants';

import axios from 'axios';

const _axios = axios.create({
    baseURL : 'https://chirp.shopziaa.com/api/auth',
    headers: {
      "Content-Type": "application/json",
    }, 
})

export const login = ( userData , toast , navigate ) => async (dispatch) => {
    try {
        dispatch({ type : LOGIN_REQUEST });
        const { data : { data } } = await _axios.post('/login' , userData );
        dispatch({ type : LOGIN_SUCCESS , payload : data });
        localStorage.setItem('user' , JSON.stringify(data));
        toast.success('Logged in successfully.');
        navigate('/');
    } catch (error) {
        console.log('login Error' , error);
        dispatch({ type : LOGIN_FAIL , payload : error?.response?.data?.message || "Something went wrong." });
    }
}

export const register = ( userData , toast , navigate ) => async (dispatch) => {
    try {
        dispatch({ type : REGISTER_REQUEST });
        const { data : { data } } = await _axios.post('/register' , userData );
        dispatch({ type : REGISTER_SUCCESS , payload : data });
        localStorage.setItem('user' , JSON.stringify(data));
        toast.success('Registeration successful.');
        navigate('/');
    } catch (error) {
        console.log('Register Error' , error);
        dispatch({ type : REGISTER_FAIL , payload : error?.response?.data?.message || "Something went wrong." })
    }
}