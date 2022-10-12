import {GET_CATEGORY,SEARCH,GET_COUNTRY,ADD_TO_CART,DELETE_CART,LETTERS,DETAILS} from './types'
import data from "bootstrap/js/src/dom/data";
export const ProductReduce = (state,action) => {
    switch (action.type){
        case SEARCH: {
            const {payload} = action
                return {
                    ...state,
                    data: payload
                }
        }
        case GET_COUNTRY:{
            return {
                ...state,
                data:action.payload
            }
        }
        case LETTERS: {
            return {
                ...state,
                data:action.payload
            }
        }
        case ADD_TO_CART:{
            const {id} = action
            const {cart,data} = state
            const check = cart.every(e => e.idMeal !== id)
                    if(check){
                const element = data.find(elem => elem.idMeal === id)
                const newArr = [...cart,element]
                return {
                    ...state,
                    cart:newArr
                }
            }
        }
        case DELETE_CART:{
            const {id} = action
            const {cart} = state
            const index = cart.findIndex(e => e.idMeal === id)
            const newArr = [...cart.slice(0, index), ...cart.slice(index + 1)]
            return {
                ...state,
                cart: newArr
            }
        }
        case DETAILS:{
            const {payload} = action
            const {details} = state
            return {
                ...state,
                details: payload
            }
        }
        default:
            return state
    }
}