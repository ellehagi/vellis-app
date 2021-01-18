import React from 'react';
import {Link } from "react-router-dom"
import {
  HomeContainer,
  HomeContent,
  HomeItems,
  HomeP,
  HomeBtn
} from './index';

const HomeScreen = () => {
  return (
    <HomeContainer>
      <HomeContent>
        <HomeItems>
          <HomeP>Ready in 5 Minutes</HomeP>
          <Link to='/MenuScreen'><HomeBtn>
          Place Order
            </HomeBtn>
            </Link>
        </HomeItems>
      </HomeContent>
    </HomeContainer>
  );
};

export default HomeScreen;