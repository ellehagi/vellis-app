import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { addToCart } from '../actions/cartActions'

const CartScreen = ({ match}) => {
    
    const productId = match.params.id

const dispatch = useDispatch()
  
const cart = useSelector(state => state.cart)
const { cartItems } = cart

useEffect(() => {
    if(productId) {
        dispatch(addToCart(productId))
    }
}, [dispatch, productId])

const removeFromCartHandler = (id) => {
    console.log('remove')
}

    return (
        <Row>
            <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? <Message>Your cart is empty <Link to='/'>Go Back</Link></Message> :
        (
            <ListGroup variant='flush'>
                {cartItems.map(item => (
            <ListGroup.Item key={item.product}>
                <Row>
                    <Col md={2}>
                        <Image src={item.images} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                <Col md={2}>£{item.price}</Col>
                <Col md={2}>
                    <Button type='button' variant='light' onClick={() => removeFromCartHandler(item.product)}>
                        <i className='fas fa-trash'></i>
                    </Button>
                </Col>
                </Row>
            </ListGroup.Item>

                ))}
            </ListGroup>
        )}
                </Col> 
             <Col md={2}>
                 </Col>   
            <Col md={2}>

            </Col>
        </Row>
    );
}

export default CartScreen;