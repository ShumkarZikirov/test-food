import React, {useCallback, useContext, useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {services} from "../../services/services";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MyContext} from "../../context/my-context";
import {Link, useParams} from "react-router-dom";
const Header = () => {
    let {value} = useParams()
    const {data,searchClick} = useContext(MyContext)
    const [text,setText] = useState('');
    const click = async () => {
        setText('')
        await services.getSearch(text)
            .then(res => {
                searchClick(res.data.meals)
                setText('')
            })
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid={'lg'}>
                <Navbar.Brand ><img src="https://www.themealdb.com/images/logo-small.png" alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{maxHeight: '80px'}}
                        navbarScroll
                    >
                        <Nav.Link >
                            <Link style={{color:'black', textDecoration:'none'}} to='/'>HOME</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link  style={{color:'black', textDecoration:'none'}} to='/cart'>CART</Link>
                        </Nav.Link>
                    </Nav>
                    <Form  className="d-flex">
                        <Form.Control
                            onChange={e => setText(e.target.value)}
                            value={value}
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button onClick={() => click()} variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;