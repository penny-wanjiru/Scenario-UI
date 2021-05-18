import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import {initialState, reducer} from './reducers/AuthReducer'
import { Header } from './components/Header';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Reset from './pages/PasswordReset';
import Home from './pages/Dashboard';

export const AuthContext = React.createContext();


const App = () => {
	const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
		<AuthContext.Provider value={{state, dispatch}}>
			<Header/>
			<Switch>
				<Route exact path='/' component={Login} />
				<Route exact path='/signup' component={Signup} />
				<Route exact path='/reset' component={Reset} />
				<Route exact path='/dashboard' component={Home} />
			</Switch>
		</AuthContext.Provider>
  );
}

export default App;
