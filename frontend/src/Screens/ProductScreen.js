import React, {  useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import { listProductDetails } from  '../actions/productActions'
import Loader from '../components/Loader'
import Message from '../components/Message'






const ProductScreen = ({ history, match }) => {
   
const dispatch = useDispatch()

const productDetails = useSelector(state => state.productDetails)
const { loading, error, product } = productDetails

useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  
  }, [dispatch, match])

  const addToCartHandler = () => {
  history.push(`/cart/${match.params.id}`)
  }
  


    return <>
      <Link className='btn btn-light my-3' to='/MenuScreen'>Go Back</Link>

{loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> :
(

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
                         <Button 
                         onClick={addToCartHandler}
                         className='btn-block' type='button'>
                             Add to Cart
                         </Button>
                     </ListGroup.Item>
                 </ListGroup>
             </Card>
         </Col>
     </Row>
) }
      
    </>
}

export default ProductScreen