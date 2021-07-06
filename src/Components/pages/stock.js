import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getArticles} from "../../Actions/articleActions";

const Stock = ()=>{

    const articles = useSelector((state)=>state.articleReducer)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getArticles())
    },[dispatch])
    console.log(articles)
    return(
        <div>
            Stock
        </div>
    )
}

export default Stock