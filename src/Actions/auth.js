import {ADD_USER, AUTH} from '../utils/actionTypes';
import * as api from '../utils/API';

export const signin = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });
        router.push('/dashboard');
    } catch (error) {
        console.log(error);
    }
};


export const signup = (formData, router) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        dispatch({ type: ADD_USER, data });
        console.log(data)
    } catch (error) {
        console.log(error);
    }
};