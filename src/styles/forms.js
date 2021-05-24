import {Form, Button} from 'react-bootstrap';
import {ErrorMessage } from "formik";

import styled from 'styled-components';

export const Wrapper = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
  justify-content: center;
  align-items: center;
	border: 1px solid #cccccc;
`;

export const FormCard = styled(Form)`
	width:30%;
	border: 1px solid #cccccc;
	border-radius: 5px;
	padding: 40px;
	box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
`;

export const Message = styled(ErrorMessage)`
		color: #ef3e3e;
		margin-bottom: 2%;
`;

export const Heading = styled.h2`
	margin-bottom: 2rem;
`
export const Group = styled(Form.Group)`
	/* padding: 8px 0px 8px 0px; */
`

export const SubmitButton = styled(Button)`
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

export const Paragraph = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 1rem;
	&:a {
		padding: 20px;
	}
`;
