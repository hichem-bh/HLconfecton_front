import * as api from "../utils/API";
import {DELETE_USER, FETCH_USER, UPDATE_USER} from "../utils/actionTypes";

export const getUsers= () => async (dispatch)=>{
    try{
        const {data} = await api.fetchUser()
        dispatch({ type: FETCH_USER, payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const updateUser = (id,formData)=> async (dispatch)=>{
    try{
        const { data } = await api.updateUser(id,formData)
        dispatch({ type: UPDATE_USER, data });
    }catch (error){
        console.log(error.message)
    }
}

export const deleteUser = (userId)=>async (dispatch)=>{
    try {
        const {data} = await api.deleteUser(userId)
        dispatch({type: DELETE_USER,data})
    }catch (e){
        console.log(e.message)
    }
}