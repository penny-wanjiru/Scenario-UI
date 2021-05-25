import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import { AuthContext } from "../App";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
	const { state } = React.useContext(AuthContext);
  return (
    <Route {...rest} render={
      props => {
			let token = localStorage.getItem('token')
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
