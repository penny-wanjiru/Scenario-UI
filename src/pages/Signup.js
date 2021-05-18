import React from "react";
import { Link } from "react-router-dom";
import {Form, Button} from 'react-bootstrap';
import styled from 'styled-components';


const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled(Form)`
	margin: 0 auto;
	width: 100%;
  max-width: 414px;
	position: relative;

`;

const FormCard = styled.div`
	border: 1px solid #cccccc;
	border-radius: 5px;
	padding: 40px;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
`;

const Heading = styled.h2`
	margin-bottom: 2rem;
`
const Group = styled(Form.Group)`
	padding: 8px 0px 8px 0px;
`

const SubmitButton = styled(Button)`
	width: 100%;
	padding: 11px 13px;
	border: none;
	border-radius: 30px;
	margin-top: 1rem;
	background: #5a05ff;
	&:hover {
    border-color: #727cf5;
  }
`;

const Paragraph = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 1rem;
	&:a {
		padding: 20px;
	}
`;

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
