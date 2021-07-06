import * as api from '../utils/API';
import {ADD_ARTICLE, GET_ARTICLES} from "../utils/actionTypes";

export const getArticles = () => async (dispatch) =>{
    try{
        const {data} = await api.getArticles()
        dispatch({ type: GET_ARTICLES, payload: data });
    }catch (e) {
        console.log(e.message)
        console.log("getting articles failed")
    }
}

export const addArticle = (article) => async (dispatch) =>{
    try{
        const {data} = await api.addArticle(article)
        console.log(article)
        dispatch({ type: ADD_ARTICLE, payload: data });
    }catch (e) {
        console.log(e.message)
        console.log("adding articles failed")
    }
}
