import {ADD_USER, DELETE_USER, FETCH_USER, UPDATE_USER} from "../utils/actionTypes";


export default (users=[], action)=>{
    switch (action.type){
        case FETCH_USER:
            return action.payload;
        case UPDATE_USER:
            try{
                console.log('updated')
                return users.map((user)=>(user._id === action.payload._id ? action.payload : user))
            }catch (e){
                console.log(e.message)
                console.log(action.payload)
                console.log('updating reducer user fail')
                break
            }
        case DELETE_USER:
            return users.filter((user) => user._id !== action.payload);
        case ADD_USER:
            return [...users,action.payload]

        default:
            return users
    }
}
