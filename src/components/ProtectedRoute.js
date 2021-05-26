import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import { AuthContext } from "../App";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
	const { state } = React.useContext(AuthContext);
	const  token = JSON.parse(localStorage.getItem('token'))

  return (
    <Route {...rest} render={
      props => {
			if (token){
				 return <Component {...rest} {...props} />
			}
			else {
				return <Redirect to={
	          {
	            pathname: '/',
	            state: {
	              from: props.location
	            }
	          }
	        } />
			}}
		}/>
  )
}
