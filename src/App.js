import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';


import { Header } from './components/Header';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Dashboard';


const App = () => {
  return (
		<>
		<Header/>
		<Switch>
			<Route exact path='/login' component={Login} />
			<Route exact path='/signup' component={Signup} />
			<Route exact path='/dashboard' component={Home} />
		</Switch>
		</>
  );
}

export default App;
