import React from "react";
import ReactDOM from "react-dom";
import {Form, Button} from 'react-bootstrap';

import { Formik, Field } from "formik";
import * as Yup from "yup";

import { Wrapper, FormWrapper, FormCard, Message, Heading , Group, SubmitButton, Paragraph} from "../styles/forms";


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
    <Formik
      initialValues={{
        password: "",
        changepassword: ""
      }}
      validationSchema={ValidationSchema}
      onSubmit={() => {}}
    >
      {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
        return (
				<Wrapper>
					<FormWrapper>
					<FormCard>
						<Heading>Reset password</Heading>
						<Group controlId="formBasicPassword">
							<Form.Label>Current Password</Form.Label>
							<Form.Control type="password" placeholder="Password" onBlur={handleBlur} value={values.password} onChange={handleChange}/>
							<Message name="bodyType" component="div" />
						</Group>
						<Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" placeholder="ChangePassword" onBlur={handleBlur} value={values.password} onChange={handleChange}/>
							<Message name="bodyType" component="div" />
						</Group>
						<SubmitButton variant="primary" type="submit">
							Reset
						</SubmitButton>
          </FormCard>
					</FormWrapper>
				</Wrapper>
        );
      }}
    </Formik>
  );
}

export default Reset;
