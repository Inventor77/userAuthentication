import React from "react";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";

export const Signup = () => {
	return (
		<Formik
			initialValues={{
				name: "",
				email: "",
				password: "",
			}}
			// validationSchema={validate}
			onSubmit={(values) => {
				console.log(values);
			}}
		>
			{(formik) => (
				<div>
					<h2 className="my-4 font-weight-bold .display-4">Sign Up</h2>
					<Form>
						<TextField label="Name" name="name" type="text" />
						<TextField label="Email" name="email" type="email" />
						<TextField label="Password" name="password" type="password" />
						<button className="btn btn-dark mt-1" type="submit">
							Register
						</button>
						<button className="btn btn-danger mt-1 ms-4" type="reset">
							Reset
						</button>
						<h5 className="mt-4">
							Have an account? <a href="/login">Signup</a>
						</h5>
					</Form>
				</div>
			)}
		</Formik>
	);
};
