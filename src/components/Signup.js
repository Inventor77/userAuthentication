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
						<button className="btn btn-dark mt-3" type="submit">
							Register
						</button>
						<button className="btn btn-danger mt-3 ms-4" type="reset">
							Reset
						</button>
					</Form>
				</div>
			)}
		</Formik>
	);
};
