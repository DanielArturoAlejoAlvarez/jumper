//console.log("Its works!");
import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
	render () {
		let user = {
			name: "Lily",
			hobbies: ["sport", "cook", "write"]
		};
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Header/>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-10 col-xs-offset-1">
						<Home name={"Herman"} age={32} user={user}>
							<p>This is a paragraph!</p>
						</Home>
					</div>
				</div>

				
			</div>
		)
	}
}

render(<App/>, window.document.getElementById("app"));