import React from "react";
import { Link } from "react-router-dom";
import {Form, Button} from 'react-bootstrap';


const Signup = () => {
  return (
		<Form>
			<Form.Group controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" />
			</Form.Group>
			<Form.Group controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" />
			</Form.Group>
			<Form.Group controlId="formBasicChecbox">
				<Form.Check type="checkbox" label="Check me out" />
			</Form.Group>
			<Button variant="primary" type="submit">
				Submit
			</Button>
		</Form>
  );
}

export default Signup;
