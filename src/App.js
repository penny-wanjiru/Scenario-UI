import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import {ProtectedRoute} from './components/ProtectedRoute'
import { Header } from './components/Header';
import Subscription from './pages/Plans';
import Plans from './pages/Plans';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Reset from './pages/PasswordReset';
import Dashboard from './pages/Dashboard';
import FourOhFour from './pages/404';

export const AuthContext = React.createContext();

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "REGISTRATION":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.key
      };
		case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.key
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
				token: null,
      };
    default:
      return state;
  }
};

const App = () => {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	const Page404 = () => <h1>Four:oh:four</h1>

  return (
		<AuthContext.Provider value={{state, dispatch}}>
			{console.log("This is the user in app", state.token)}
			<Header/>
			<Switch>
				<Route exact path='/' component={Login} />
				<Route exact path='/signup' component={Signup} />
				<Route exact path='/reset' component={Reset} />
				<ProtectedRoute exact path='/dashboard' component={Dashboard} />
				<ProtectedRoute exact path='/plans' component={Plans} />
				<Route component={FourOhFour} />
			</Switch>
		</AuthContext.Provider>
  );
}

export default App;
