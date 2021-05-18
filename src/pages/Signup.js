import React from "react";
import { Link } from "react-router-dom";
import {Form, Button} from 'react-bootstrap';

import { Wrapper, FormWrapper, FormCard, Message, Heading , Group, SubmitButton, Paragraph} from "../styles/forms";

const Signup = () => {
  return (
		<Wrapper>
			<FormWrapper>
				<FormCard>
					<Heading>Sign up</Heading>
					<Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Group>
					<Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Group>
					<SubmitButton variant="primary" type="submit">
						Sign Up
					</SubmitButton>
					<Paragraph>
						Already registered <a href="/login"> sign in? </a>
					</Paragraph>
				</FormCard>
			</FormWrapper>
		</Wrapper>
  );
}

export default Signup;
