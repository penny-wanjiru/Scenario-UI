import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import App from './App';


const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    // background: #f4f5fc;
  }

  body, html, #root {
    height: 100%;
    font-family: -apple-system, Ubuntu , BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;;
  }
`;

ReactDOM.render(
	<>
		<GlobalStyle />
	  <BrowserRouter>
	    <App />
	  </BrowserRouter>
	</>,
  document.getElementById('root')
);
