import {services} from "../../services/services";
import React, {useEffect, useContext, useState} from "react";
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import './country.css'
import {MyContext} from "../../context/my-context";

const Country = () => {
    const {data, getCountry} = useContext(MyContext)
    const [value, setValue] = useState('')
    const clickCountry = async (title) => {
        await services.getCountry(title)
            .then(res => {
                getCountry(res.data.meals)
            })
    }
    const arr = [
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Flag_of_the_United_States_%28Pantone%29.svg/250px-Flag_of_the_United_States_%28Pantone%29.svg.png",
            title: 'British'
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
            title: 'French'
        },
        {
            img: "https://www.flagistrany.ru/data/flags/big/ca.png",
            title: 'Canadian'
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg',
            title: 'Jamaican'
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
            title: 'Chinese'
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/250px-Flag_of_the_Netherlands.svg.png",
            title: 'Dutch'
        },
        {
            img: 'https://www.flagistrany.ru/data/flags/ultra/eg.png',
            title: 'Egyptian'
        },
        {
            img: 'https://www.flagistrany.ru/data/flags/big/gr.png',
            title: 'Greek'
        },
        {
            img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png",
            title: 'Indian'
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/2560px-Flag_of_Italy.svg.png',
            title: 'Italian'
        },
        {
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Flag_of_Japan_%28with_border%29.png/640px-Flag_of_Japan_%28with_border%29.png',
            title: 'Japanese'
        },
        {
            img: "https://flagof.ru/wp-content/uploads/2018/10/Flag_of_Morocco_1slash6.svg_.png",
            title: 'Moroccan'
        },
        {
            img: 'https://www.zelsuvenir.ru/published/publicdata/ZELSUVENIR/attachments/SC/products_pictures/flag-portugal_enl.jpg',
            title: 'Portuguese'
        },
        {
            img: 'https://thumbs.dreamstime.com/b/%D1%84%D0%BB%D0%B0%D0%B3-%D1%80%D0%BE%D1%81%D1%81%D0%B8%D1%8F-136307993.jpg',
            title: 'Russian'
        }
    ]

    return (
        <div className={'country-div'}>
            <h1>Browse Country</h1>
            <div>
                {
                    arr.map((elem, i) => {
                        return (
                            <div key={i}>
                                <img onClick={() => clickCountry(elem.title)} src={elem.img} alt=""/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Country