import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from "./main/main";
import Cart from "./cart/cart";
import Details from "./details/details";
const Nav = () => {
    return (
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/details/:product' element={<Details/>}/>
        </Routes>
    );
};


export default Nav;