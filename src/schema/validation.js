import { Formik, Field } from "formik";
import * as Yup from "yup";

export const ValidationSchema = Yup.object().shape({
	email: Yup.string()
	.email("*Must be a valid email address")
	.max(100, "*Email must be less than 100 characters")
	.required("*Email is required"),
	password: Yup.string()
	.required("*Password is required")
	.min(5, "*Password is too short")
	.max(128, "*Password too long")
});
