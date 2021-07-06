import * as api from '../utils/API';
import {ADD_CATEGORIE, GET_CATEGORIES} from "../utils/actionTypes";

const getCategories =()=>async (dispatch)=>{
    try {
        const {data} = await api.getCategories()
        dispatch({ type: GET_CATEGORIES, payload: data });

    }catch (e) {
        console.log(e.message)
        console.log('fetching categories failed')
    }
}

const addCategorie =(newCategorie)=>async (dispatch)=>{
    try {
        const {data} = await api.addCategorie(newCategorie)
        console.log(newCategorie)
        dispatch({ type: ADD_CATEGORIE, payload: data });
        console.log('categorie added')

    }catch (e) {
        console.log(e.message)
        console.log('fetching categories failed')
    }
}