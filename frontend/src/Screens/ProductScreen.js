import React, {  useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import { listProductDetails } from  '../actions/productActions'
import { productDetailsReducer } from '../reducers/productReducers'



const ProductScreen = ({ match }) => {
   
const dispatch = useDispatch()

const productDetails = useSelector(state => state.productDetails)
const { loading, } = productDetails

useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  
  }, [dispatch, match])
  

    return <>
      <Link className='btn btn-light my-3' to='/MenuScreen'>Go Back</Link>
      <Row>
     <Col md={6}>
      <Image src={product.images} alt={product.name} fluid/>
          </Col>
          <Col md={3}>
              <ListGroup variant='flush'>
              <ListGroup.Item>
                <h2>{product.name}</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                  <p>{product.sizes}</p>
              </ListGroup.Item>
              <ListGroup.Item>
                  Price: <strong>£{product.price}</strong>
              </ListGroup.Item>
              <ListGroup.Item>
                  Description: {product.desc}
              </ListGroup.Item>
              </ListGroup>
          </Col>
          <Col md={3}>
              <Card>
                  <ListGroup variant='flush'>
                      <ListGroup.Item>
                          <Row>
                              <Col>
                               Price:
                              </Col>
                              <Col>
                        <strong>£{product.price}</strong>
                              </Col>
                          </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                          <Button className='btn-block' type='button'>
                              Add to Cart
                          </Button>
                      </ListGroup.Item>
                  </ListGroup>
              </Card>
          </Col>
      </Row>
    </>
}

export default ProductScreen