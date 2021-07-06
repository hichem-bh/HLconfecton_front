import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools} from 'redux-devtools-extension'
import auth from '../Reducers/auth';
import articleReducer from "../Reducers/articleReducer";
import categorieReducer from "../Reducers/categorieReducer";
import userReducer from "../Reducers/userReducer";

const reducers = combineReducers({ auth,articleReducer,categorieReducer,userReducer});
const initialState = {}
const middleWare = [thunk]
const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store