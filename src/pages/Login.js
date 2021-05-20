import React from "react";
import { Link, useHistory} from "react-router-dom";
import {Form, Button} from 'react-bootstrap';

import { Formik } from "formik";
import {ValidationSchema} from '../schema/validation'
import { AuthContext } from "../App";

import { Wrapper, FormCard, Message, Heading , Group, SubmitButton, Paragraph} from "../styles/forms";


const Login = () => {
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
				fetch("https://hiring-example-25770.botics.co/rest-auth/login/", {
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
							console.log("getting user", res)
							return res.json();
						}
						throw res;
					})
					.then(resJson => {
						console.log("True response", resJson)
						setSubmitting(false)
						dispatch({
							type: "LOGIN",
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
					{serverErrors.errorStatus && (
            <span className="form-error" style={{ color: "red" }} >
							{serverErrors.errorMessage}
						</span>
        	)}
					<SubmitButton variant="primary" type="submit">
						{isSubmitting ? "Signing in..." : "Login"}
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
		</Wrapper>
  );
}

export default Login;
