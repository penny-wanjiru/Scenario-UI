import React from 'react';
import {Route, Redirect} from 'react-router-dom'
import { AuthContext } from "../App";


export const ProtectedRoute = ({component: Component, ...rest}) =>{
	const { state } = React.useContext(AuthContext);
	return (
		<Route {...rest} render={
			(props)=>{ state.isAuthenticated ? <Component {...props}/>: <Redirect exact to="/" /> }
		}/>
	)
}
