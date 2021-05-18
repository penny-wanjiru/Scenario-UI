import React from "react";
import { Link } from "react-router-dom";
import {Form, Button} from 'react-bootstrap';

import { Formik, Field } from "formik";
import * as Yup from "yup";

import { Wrapper, FormWrapper, FormCard, Message, Heading , Group, SubmitButton, Paragraph} from "../styles/forms";


const Login = () => {

	const ValidationSchema = Yup.object().shape({
		email: Yup.string()
	  .email("*Must be a valid email address")
	  .max(100, "*Email must be less than 100 characters")
	  .required("*Email is required"),
	  password: Yup.string()
	  .required("*Password is required")
		.min(5, "*Password is too short")
		.max(128, "*Password too long")
	});

  return (
		<Wrapper>
			<FormWrapper>
				<Formik
					initialValues={{
						email: '',
						password:'',
					}}
					validateOnMount={true}
					validationSchema={ValidationSchema}
					onSubmit={(values, {setSubmitting, resetForm}) => {

					}}
					>
					<FormCard>
						<Heading>Login</Heading>
						<Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
							<Message name="bodyType" component="div" />
						</Group>
						<Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
							<Message name="bodyType" component="div" />
						</Group>
						<SubmitButton variant="primary" type="submit">
							Sign Up
						</SubmitButton>
						<Paragraph>
							Not registered? <a href="/signup"> Signup </a>
						</Paragraph>
						<Paragraph>
							Forgot password? <a href="/reset">Reset</a>
						</Paragraph>
					</FormCard>
				</Formik>
			</FormWrapper>
		</Wrapper>
  );
}

export default Login;
