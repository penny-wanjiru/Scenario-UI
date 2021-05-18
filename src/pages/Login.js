import React from "react";
import { Link } from "react-router-dom";
import {Form, Button} from 'react-bootstrap';

import { Formik } from "formik";
import {ValidationSchema} from '../schema/validation'

import { Wrapper, FormWrapper, FormCard, Message, Heading , Group, SubmitButton, Paragraph} from "../styles/forms";


const Login = () => {

  return (
		<Wrapper>
			<FormWrapper>
				<Formik
					initialValues={{
						email: 'init@gmail.com',
						password:'',
					}}
					validationSchema={ValidationSchema}
					onSubmit={(values, {setSubmitting, resetForm}) => {
						console.log(values)
					}}
					>
				 	{( {values, errors, handleChange, handleBlur, handleSubmit, isSubmitting, isValid}) => (
						<FormCard onSubmit={handleSubmit}>
						{console.log("The errors", errors)}
							<Heading>Login</Heading>
							<Group controlId="formBasicEmail">
								<Form.Label>Email address</Form.Label>
								<Form.Control type="email" placeholder="Enter email" name="email" value={values.email} onChange={handleChange}/>
								<span className="error" style={{ color: "red" }}>
		              {errors.email}
		            </span>
							</Group>
							<Group controlId="formBasicPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control type="password" placeholder="Password" name="password" value={values.password} onChange={handleChange}/>
								<span className="error" style={{ color: "red" }}>
		              {errors.password}
		            </span>
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
					)}
				</Formik>
			</FormWrapper>
		</Wrapper>
  );
}

export default Login;
