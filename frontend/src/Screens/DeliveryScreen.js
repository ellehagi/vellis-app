import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'
import { saveDeliveryAddress } from '../actions/cartActions'

const DeliveryScreen = ({ history, location }) => {

  const cart = useSelector(state => state.cart)
  const { deliveryAddress } = cart

    const [address, setAddress] = useState(deliveryAddress.address)
    const [postalCode, setPostalCode] = useState(deliveryAddress.postalCode)

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveDeliveryAddress({ address, postalCode }))
        history.push('/payment')
        ///window.location.replace('/payment')
    }
  
    return<FormContainer>
      <CheckoutSteps step1 step2/>
          <h1>Delivery</h1>
          <Form onSubmit={submitHandler}>
          <Form.Group controlId='address'>
          <Form.Label>Address</Form.Label>
          <Form.Control
            type='address'
            placeholder='Enter address'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='postalCode'>
          <Form.Label>Postal Code</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter postal code'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>

     

        <Button type='submit' variant='primary'>
          Continue
        </Button>
          </Form>
        </FormContainer>
    
}

export default DeliveryScreen;