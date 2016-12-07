import React from "react";

export class Home extends React.Component {
	render() {
		/*let content = "";
		if(true) {
			content = <p>Hey!</p>;
		}*/
		console.log(this.props);
		let text = "Something!";
		return(
			<div>
				<p>In a new Component!</p>
				<p>{text}</p>
				<div>
					My name is <strong>{this.props.name}</strong> and have <strong>{this.props.age}</strong> years old. My wife is <strong>{this.props.user.name}</strong> and she likes: <h4>Hobbies:</h4><ul> {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)} </ul>

				</div>
				<hr/>
				{this.props.children}
			</div>
		);
	}
}

Home.propTypes = {
	name: React.PropTypes.string,
	age: React.PropTypes.number,
	user: React.PropTypes.object,
	children: React.PropTypes.element.isRequired
}