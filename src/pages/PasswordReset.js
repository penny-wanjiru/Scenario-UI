import React, {useState} from "react";
import {Form} from 'react-bootstrap';

import { Formik } from "formik";
import * as Yup from "yup";

import { Wrapper, Message, Heading , FormCard, Group, SubmitButton, Paragraph} from "../styles/Forms";


const ValidationSchema = Yup.object().shape({
	email: Yup.string()
	.email("*Must be a valid email address")
	.required("*Email is required")
})

const Reset = () => {
	const [message, setMessage] = useState([]);
	const [serverErrors, setServerErrors] = useState( {errorStatus:null, errorMessage: null});

  return (
		<Wrapper>
    <Formik
      initialValues={{
        email: ""
      }}
      validationSchema={ValidationSchema}
			onSubmit={(values, {setSubmitting, setErrors, resetForm}) => {
				fetch("https://hiring-example-25770.botics.co/rest-auth/password/reset/", {
					method: "post",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({email: values.email})
					})
					.then(res => {
						if (res.ok) {
							return res.json();
						}
						throw res;
					})
					.then(resJson => {
						setMessage(resJson)
					})
					.catch(error => {
						setServerErrors({
							errorStatus: error.status || error.statusText,
							errorMessage: "Validation Error: Enter correct details"
						});
					});
			}}
    >
			{( {values, errors, handleChange, handleBlur, handleSubmit, isSubmitting, isValid}) => (
				<FormCard onSubmit={handleSubmit}>
					<Heading>Reset password</Heading>
					<Group controlId="formBasicEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" name="email" value={values.email} onChange={handleChange}/>
						<span className="error" style={{ color: "red" }}>
							{errors.email}
						</span>
					</Group>
					<span className="error" style={{ color: "blue" }}>
						{message.detail}
					</span>
					<SubmitButton variant="primary" type="submit">
						Reset
					</SubmitButton>
	      </FormCard>
      )}
    </Formik>
		</Wrapper>
  );
}

export default Reset;
