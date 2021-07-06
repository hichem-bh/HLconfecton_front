import {ADD_ARTICLE, GET_ARTICLES} from "../utils/actionTypes";

export default (articles = [], action) => {
    switch (action.type) {
        case GET_ARTICLES:
            return action.payload;
        case ADD_ARTICLE:
            return [...articles, action.payload]
        default:
            return articles;
    }
}