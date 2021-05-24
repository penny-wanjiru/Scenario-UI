import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	text-align: center;
	margin-top:20%;
`

const FourOhFour = () => (
  <Wrapper>
    <h1>404 - Not Found!</h1>
    <Link to="/">
      Go Home
    </Link>
  </Wrapper>
);

export default FourOhFour;
