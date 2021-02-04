import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container} from 'react-bootstrap'
import MenuScreen from './Screens/MenuScreen';
import HomeScreen from './components/home/HomeScreen';
import ProductScreen from './Screens/ProductScreen'
import Header from './components/Header'
import CartScreen from './Screens/CartScreen'
import LoginScreen from './Screens/LoginScreen'
import ProfileScreen from './Screens/ProfileScreen'
import RegisterScreen from './Screens/RegisterScreen'
import DeliveryScreen from './Screens/DeliveryScreen'
import PaymentScreen from './Screens/PaymentScreen'



const App = () => {
  return (
    <Router>
      <Container>
      <Header/>
      <Route path='/' component={HomeScreen} exact/>
      <Route path='/MenuScreen' component={MenuScreen} />
      <Route path='/payment' component={PaymentScreen} />
      <Route path='/product/:id' component={ProductScreen} />
      <Route path='/cart/:id?' component={CartScreen} />
      <Route path='/register' component={RegisterScreen} />
      <Route path='/profile' component={ProfileScreen} />
      <Route path='/login' component={LoginScreen} />
      <Route path='/delivery' component={DeliveryScreen} />
      </Container>
    </Router>
  );
}

export default App;