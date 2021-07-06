import {ADD_CATEGORIE, GET_CATEGORIES} from "../utils/actionTypes";

export default (categories = [], action) => {
    switch (action.type) {
        case GET_CATEGORIES:
            return action.payload;
        case ADD_CATEGORIE:
            return [...categories, action.payload]
        default:
            return categories;
    }
}