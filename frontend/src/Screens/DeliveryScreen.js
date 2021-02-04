import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'

const DeliveryScreen = ({ history }) => {
    const [address, setAddress] = useState('')
    const [postalCode, setPostalCode] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log('submit')
    }
  
    return<FormContainer>
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