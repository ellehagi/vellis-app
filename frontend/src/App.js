import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container} from 'react-bootstrap'
import MenuScreen from './Screens/MenuScreen';
import HomeScreen from './components/home/HomeScreen';
import ProductScreen from './Screens/ProductScreen'
import Header from './components/Header'
import CartScreen from './Screens/CartScreen'
import LoginScreen from './Screens/LoginScreen'
import RegisterScreen from './Screens/RegisterScreen'



const App = () => {
  return (
    <Router>
      <Container>
      <Header/>
      <Route path='/' component={HomeScreen} exact/>
      <Route path='/MenuScreen' component={MenuScreen} />
      <Route path='/product/:id' component={ProductScreen} />
      <Route path='/cart/:id?' component={CartScreen} />
      <Route path='/register' component={RegisterScreen} />
      <Route path='/login' component={LoginScreen} />
      </Container>
    </Router>
  );
}

export default App;