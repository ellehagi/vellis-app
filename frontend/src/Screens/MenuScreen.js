import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap';
import Message from '../components/Message'
import Loader from '../components/Loader'
import Product from '../components/Product';
import { listProducts} from '../actions/productActions'



const MenuScreen = () => {

const dispatch = useDispatch()

const productList = useSelector((state) => state.productList)
const { loading, error, products } = productList
console.log(productList)

useEffect(() => {
dispatch(listProducts())

}, [dispatch]

)

return (
  <>
  <h1>menu</h1>
{loading ? ( 
<Loader />
 ) : error ? (  
 <Message variant='danger'>{error}</Message> 
 ) : ( 
<Row>
  {products.length > 0 && 
  products.map((product) => (
   <Col className="imgs" key={product._id} sm={5} md={5} lg={4} xl={0}>
     <Product product={product} />
   </Col>
  ))}
</Row>
 )}

</>
)
}

export default MenuScreen;
