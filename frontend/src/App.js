import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container} from 'react-bootstrap'
import MenuScreen from './Screens/MenuScreen';
import HomeScreen from './components/home/HomeScreen';
import ProductScreen from './Screens/ProductScreen'
import Header from './components/Header'
import './App.css';




function App() {
  return (
    <Router>
      <Container>
      <Header/>
      <Route path='/' component={HomeScreen} exact/>
      <Route path='/MenuScreen' component={MenuScreen} />
      <Route path='/product/:id' component={ProductScreen} />
      </Container>
    </Router>
  );
}

export default App;