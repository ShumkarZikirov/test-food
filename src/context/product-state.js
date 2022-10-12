import {useReducer} from "react";
import {MyContext} from "./my-context";
import {ProductReduce} from "./product-reduce";
import {GET_CATEGORY,SEARCH,GET_COUNTRY,ADD_TO_CART,DELETE_CART,LETTERS,DETAILS} from './types'
import data from "bootstrap/js/src/dom/data";
export const ProductState = ({children}) => {
    const initialState = {
        data:[],
        cart:[],
        details:[]
    }
    const [state,dispatch] = useReducer(ProductReduce,initialState)
    const searchClick = (data) => dispatch({type:SEARCH, payload:data})
    const getCountry = (data) => dispatch({type:GET_COUNTRY,payload:data})
    const getCart = (id) => dispatch({type:ADD_TO_CART,id})
    const deleteCart = (id) => dispatch({type:DELETE_CART,id})
    const letter = (data) => dispatch({type:LETTERS,payload:data})
    const getDetails = (details) => dispatch({type:DETAILS,payload:details})
    return(
        <MyContext.Provider value={{
            data:state.data,
            cart:state.cart,
            details:state.details,
            searchClick,
            getCountry,
            getCart,
            deleteCart,
            letter,
            getDetails
        }}>
            {children}
        </MyContext.Provider>
    )
}