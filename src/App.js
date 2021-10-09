import React from "react";
import "./App.css";
import { Signup } from "./components/Signup";
import rocket from "./assets/rocket.png";

export default function App() {
	return (
		<div>
			<div className="container shadow-lg p-5">
				<div className="row">
					<div className="col-md-5 p-5">
						<Signup />
					</div>
					<div className="col-md-7 my-auto p-5">
						<img className="img-fluid w-100" src={rocket} alt="Rocket" />
					</div>
				</div>
			</div>
		</div>
	);
}
