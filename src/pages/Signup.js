import React from "react";
import { Link } from "react-router-dom";
import {Form, Button} from 'react-bootstrap';

import { Formik, Field } from "formik";
import {ValidationSchema} from '../schema/validation'
import { AuthContext } from "../App";

import { Wrapper, FormWrapper, FormCard, Message, Heading , Group, SubmitButton, Paragraph} from "../styles/forms";

const Signup = () => {
	const { dispatch } = React.useContext(AuthContext);

  return (
		<Wrapper>
			<FormWrapper>
			<Formik
				initialValues={{
					email: '',
					password:'',
					errorMessage: null
				}}
				validationSchema={ValidationSchema}
				onSubmit={(values, {setSubmitting, setErrors, resetForm}) => {
					fetch("https://hiring-example-25770.botics.co/rest-auth/registration/", {
						method: "post",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify({
							email: values.email,
							password: values.password
						})
					})
						.then(res => {
							if (res.ok) {
								console.log("this is the res", res);
								return res.json();
							}
							throw res;
						})
						.then(resJson => {
							dispatch({
								type: "REGISTRATION",
								payload: resJson
							});
						})
						.catch(error => {
							setErrors({errorMessage: error.message || error.statusText})
						});
				}}
				>
				{( {values, errors, handleChange, handleBlur, handleSubmit, isSubmitting, isValid}) => (
					<FormCard onSubmit={handleSubmit}>
						<Heading>Sign up</Heading>
						<Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control type="email" placeholder="Enter email" />
							<span className="error" style={{ color: "red" }}>
								{errors.email}
							</span>
						</Group>
						<Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="Password" />
							<span className="error" style={{ color: "red" }}>
								{errors.password}
							</span>
						</Group>
						{errors.errorMessage && (
              <span className="form-error">{errors.errorMessage}</span>
            )}
						<SubmitButton variant="primary" type="submit">
							{isSubmitting ? "Signing up..." : "SignUp"}
						</SubmitButton>
						<Paragraph>
							Already registered <a href="/"> sign in? </a>
						</Paragraph>
					</FormCard>
				)}
				</Formik>
			</FormWrapper>
		</Wrapper>
  );
}

export default Signup;
