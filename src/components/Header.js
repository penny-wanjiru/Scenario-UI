import React, { useState } from "react"
import { useEffect } from "react"
import styled from "styled-components"
import { Link , useHistory} from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';
import { AuthContext } from "../App";


export const Header = () => {
	const history = useHistory();
	const { state, dispatch } = React.useContext(AuthContext);

	console.log("this is the state", state)

	const logout = () => {
		fetch("https://hiring-example-25770.botics.co/rest-auth/logout/", {
			method: "post",
			headers: {
				"Content-Type": "application/json"
			},
		})
		.then(res => {
			if (res.ok) {
				console.log("getting user", res)
				return res.json();
			}
			throw res;
		})
		.then(resJson =>{
			dispatch({
				type: "LOGOUT",
				payload: resJson
			});
		})
		.then(() => {
			history.push('/');
		})
		.catch(error => {
			console.log(error)
		});
	}

	return (
		<div>
			{state.isAuthenticated?(
				<Navbar style={{background:"#1e0a45"}}>
					<Navbar.Brand  href="#home" style={{color:"#ffffff", marginLeft:"2%"}} >Crowdbotics-Mini</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<Navbar.Text style={{paddingRight:"80px"}}>
							<Link to="/" onClick={logout} style={{color:"#ffffff"}}>Logout</Link>
						</Navbar.Text>
					</Navbar.Collapse>
				</Navbar>
		):(
			<Navbar style={{background:"#1e0a45"}}>
				<Navbar.Brand  href="#home" style={{color:"#ffffff", marginLeft:"2%"}} >Crowdbotics-Mini</Navbar.Brand>
			</Navbar>
		)}
	</div>
	)
};
