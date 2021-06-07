import React from "react";
import { Link, useHistory} from "react-router-dom";
import {Form, Button} from 'react-bootstrap';

import { Formik } from "formik";
import {ValidationSchema} from '../schema/Validation'
import { AuthContext } from "../App";


import { Wrapper, FormCard, Message, Heading , Group, LoginButton, Paragraph} from "../styles/Forms";


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
							return res.json();
						}
						throw res;
					})
					.then(resJson => {
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
					<Heading>Login</Heading>
					<Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" name="email" value={values.email} data-testid="email-input" onChange={handleChange}/>
						{errors.email?(
							<span className="error" style={{ color: "red" }} data-testid="email-error-msg" >
              {errors.email}
            	</span>
						):(null)}
					</Group>
					<Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" name="password" value={values.password} data-testid="password-input" onChange={handleChange}/>
						{errors.password?(
							<span className="error" style={{ color: "red" }} data-testid="pass-error-msg">
              	{errors.password}
            	</span>
						):(null)}
					</Group>
					{serverErrors.errorStatus && (
            <span className="form-error" style={{ color: "red" }} >
							{serverErrors.errorMessage}
						</span>
        	)}
					<LoginButton variant="primary" type="submit">
						{isSubmitting ? "Signing in..." : "Login"}
					</LoginButton>
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
