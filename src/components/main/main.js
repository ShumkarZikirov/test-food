import React, { useEffect, useContext } from 'react';
import {services} from "../../services/services";
import {MyContext} from "../../context/my-context";
import './main.css'
import Country from "../country/country";
import Letters from "../letters/letters";
import {useNavigate} from "react-router-dom";

const Main = () => {
    const {data,getCart,getDetails} = useContext(MyContext)
    const navigate = useNavigate()
    const addToCart = (id) => {
        getCart(id)
    }
    const getDetal = async (id) =>{
        navigate(`/details/${id}`)
        const data = await services.getDetalis(id)
            .then(res => {
                getDetails(res.data.meals)
            })
    }
    return(
        <div className={'main-div'}>
            <Country/>
            <div className={'block-product'}>
                {
                    data.map((elem,i) => {
                        return(
                            <div  className={'product'}  key={i}>
                                <div onClick={() => getDetal(elem.idMeal)}>
                                    <img className={'main-img'} src={elem.strMealThumb} alt=""/>
                                    <p className={'main-title'}>{elem.strMeal}</p>
                                </div>
                                <button onClick={() => addToCart(elem.idMeal)} className={'button-main'}>add to cart</button>
                            </div>
                        )
                    })
                }
            </div>
            <Letters/>
        </div>
    )
}
export default Main