import React, { useState } from "react"
import { useEffect } from "react"
import styled from "styled-components"
import { Link } from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';


export const Header = () => {

	return (
		<Navbar style={{background:"#1e0a45"}} >
			<Navbar.Brand style={{color:"#ffffff", paddingLeft: "20px"}} href="#home">Crowdbotics-Mini</Navbar.Brand>
			<Nav className="mr-auto">
				<Nav.Link href="#home">Home</Nav.Link>
			</Nav>
		</Navbar>
	)
};
