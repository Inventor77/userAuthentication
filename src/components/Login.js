import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";

export const Login = () => {
	return (
		<Formik
			initialValues={{
				name: "",
				password: "",
			}}
			// validationSchema={validate}
			onSubmit={(values) => {
				console.log(values);
			}}
		>
			{(formik) => (
				<div>
					<h2 className="my-4 font-weight-bold .display-4">Log In</h2>
					<Form>
						<TextField label="Name" name="name" type="text" />
						<TextField label="Password" name="password" type="password" />
						<button className="btn btn-dark mt-3" type="submit">
							Login
						</button>
						<button className="btn btn-danger mt-3 ms-4" type="reset">
							Reset
						</button>
						<h5 className="mt-4">
							Don't have an account? <a href="/signup">Signup</a>
						</h5>
					</Form>
				</div>
			)}
		</Formik>
	);
};
