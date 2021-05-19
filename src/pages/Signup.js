import React from "react";
import { Link, useHistory} from "react-router-dom";
import {Form, Button} from 'react-bootstrap';

import { Formik, Field } from "formik";
import {ValidationSchema} from '../schema/validation'
import { AuthContext } from "../App";

import { Wrapper, FormCard, Message, Heading , Group, SubmitButton, Paragraph} from "../styles/forms";

const Signup = () => {
	const history = useHistory();
	const { dispatch } = React.useContext(AuthContext);
	const [serverErrors, setServerErrors] = React.useState( {errorStatus:null, errorMessage: null});

  return (
		<Wrapper>
			<Formik
				initialValues={{
					email: '',
					password:'',
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
								return res.json();
							}
							throw res;
						})
						.then(resJson => {
							setSubmitting(false)
							dispatch({
								type: "REGISTRATION",
								payload: resJson
							});
						})
						.then(() => {
				      history.push('/dashboard');
				    })
						.catch(error => {
							setSubmitting(false)
							setServerErrors({
	          		errorStatus: error.status || error.statusText,
								errorMessage: "Validation Error: Enter correct details"
	        		});
						});

				}}
				>
				{( {values, errors, handleChange, handleBlur, handleSubmit, isSubmitting, isValid}) => (
						<FormCard onSubmit={handleSubmit}>
							<Heading>Sign up</Heading>
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
							{serverErrors.errorStatus && (
		            <span className="form-error" style={{ color: "red" }} >
									{serverErrors.errorMessage}
								</span>
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
		</Wrapper>
  );
}

export default Signup;
