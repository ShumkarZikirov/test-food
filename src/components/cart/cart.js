import {MyContext} from "../../context/my-context";
import React,{useContext,useState} from "react";
import {services} from "../../services/services";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import {useNavigate} from "react-router-dom";
import './cart.css'
const Cart = () => {
    const {cart,deleteCart,getDetails} = useContext(MyContext)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name,setName] = useState('')
    const [lastName,setLastName] = useState('')
    const [number,setNumber] = useState('')
    const [check,setCheck] = useState('')
    const deletCart = (id) => {
        deleteCart(id)
    }
    const navigate = useNavigate()
    const onOrder = async () =>{
        setNumber('')
        setName('')
        setLastName('')
        await services.post({name: name, lastName: lastName, number: number,checked: check, title: cart.map(e => e.strMeal)})
            .then(res => res)
    }
    const getDetal = async (id) =>{
        navigate(`/details/${id}`)
        const data = await services.getDetalis(id)
            .then(res => {
                getDetails(res.data.meals)
            })
    }
    return(
        <div className={'cart'}>
            <div className={'order'}>
                <h3>CART</h3>
                <button onClick={handleShow}>ORDER</button>
            </div>
            <div className={'block-product'}>
                <>
                    <Modal show={show} onHide={handleClose} animation={false}>
                        <Modal.Header closeButton>
                            <Modal.Title>FORM ORDER</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-1" controlId="exampleForm.ControlInput1">
                                    <Form.Control
                                        onChange={(e) => setName(e.target.value)}
                                        type="text"
                                        placeholder="name"
                                        autoFocus
                                    />
                                </Form.Group>
                                <Form.Group className="mb-1" controlId="exampleForm.ControlInput2">
                                    <Form.Control
                                        onChange={(e) => setLastName(e.target.value)}
                                        type="text"
                                        placeholder="lastName"
                                        autoFocus
                                    />
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="exampleForm.ControlInput3">
                                    <Form.Control
                                        onChange={(e) => setNumber(e.target.value)}
                                        type="text"
                                        placeholder="number"
                                        autoFocus
                                    />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={onOrder}>
                                Save Changes
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </>
                {
                    cart.map((elem,i) => {
                        return(
                            <div className={'product'} key={i}>
                               <div onClick={() =>getDetal(elem.idMeal)}>
                                   <img className={'main-img'} src={elem.strMealThumb} alt=""/>
                                   <p className={'main-title'}>{elem.strMeal}</p>
                               </div>
                                <button className={'button-main'} onClick={() => deletCart(elem.idMeal)}>delete</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Cart