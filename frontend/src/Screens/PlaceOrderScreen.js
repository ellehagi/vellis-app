import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, Row, Col, ListGroup, Image, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import CheckoutSteps from '../components/CheckoutSteps'
import { createOrder } from '../actions/orderActions'

const PlaceOrderScreen = () => {
   const cart = useSelector(state => state.cart)

   const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        deliveryAddress: cart.deliveryAddress,
        paymentMethod: cart.paymentMethod,
        itemsPrice: cart.itemsPrice,
        deliveryPrice: cart.deliveryPrice,
        totalPrice: cart.totalPrice,
      })
    )
   }

   //   Calculate prices
 cart.itemsPrice = cart.cartItems.reduce(
     (acc, item) => acc + item.price * item.qty,

   0
 )

 cart.deliveryPrice = cart.cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,

  0
)

cart.totalPrice = cart.cartItems.reduce(
    (acc, item) => acc + item.price * item.qty,

  0
)

    return (

        <>
           <CheckoutSteps step1 step2 step3 step4/>    
           <Row>
               <Col md={8}>
                   <ListGroup variant='flush'> 
                   <ListGroup.Item>
                       <h2>Delivery</h2>
                       <p>
                <strong>Address:</strong>
                {cart.deliveryAddress.address}, {' '}
                {cart.deliveryAddress.postalCode},{' '}
              </p>
                   </ListGroup.Item>
                   <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong>Method: </strong>
              {cart.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>
              {cart.cartItems.length === 0 ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup variant='flush'>
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image
                            src={item.images}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x £{item.price} = £{item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>£{cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Delivery</Col>
                  <Col>£{cart.deliveryPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>£{cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type='button'
                  className='btn-block'
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default PlaceOrderScreen;