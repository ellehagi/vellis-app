import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { listProducts} from '../actions/productActions'



const MenuScreen = () => {

const dispatch = useDispatch()

const productList = useSelector((state) => state.productList)
const { loading, error, products } = productList

useEffect(() => {
dispatch(listProducts())

}, [dispatch]

)
console.log(products)

  return (
    <>
    <h1>menu</h1>
{loading ? 
  <h2>loading</h2>
 : error ? 
    <h3>{error}</h3>
 : 
  <Row>
    {products.map((product) => (
     <Col key={product._id} sm={5} md={6} lg={4} xl={0}>
       <Product product={product} />
     </Col>
    ))}
  </Row>}
      </>
)
}

export default MenuScreen;
