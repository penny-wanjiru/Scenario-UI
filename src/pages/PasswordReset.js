import React from "react";
import {Form} from 'react-bootstrap';

import { Formik } from "formik";
import * as Yup from "yup";

import { Wrapper, Message, Heading , FormCard, Group, SubmitButton, Paragraph} from "../styles/forms";


const ValidationSchema = Yup.object().shape({
  password: Yup.string().required("*Password is required"),
  changepassword: Yup.string().when("password", {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "*Both password need to be the same"
    )
  })
});

const Reset = () => {
  return (
		<Wrapper>
    <Formik
      initialValues={{
        password: "",
        changepassword: ""
      }}
      validationSchema={ValidationSchema}
      onSubmit={(values) => {console.log("faf",values)}}
    >
			{( {values, errors, handleChange, handleBlur, handleSubmit, isSubmitting, isValid}) => (
				<FormCard onSubmit={handleSubmit}>
					<Heading>Reset password</Heading>
					<Group controlId="formBasicPassword">
						<Form.Label>Current Password</Form.Label>
						<Form.Control type="password" placeholder="Password" name="password" onBlur={handleBlur} value={values.password} onChange={handleChange}/>
					</Group>
					<Message name="bodyType" component="div" />
					<Group controlId="formBasicPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="ChangePassword" name="changepassword" onBlur={handleBlur} value={values.changepassword} onChange={handleChange}/>
					</Group>
					<Message name="bodyType" component="div" />
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
