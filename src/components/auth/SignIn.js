import React, { Component } from 'react';

class SignIn extends Component {
	state = {
		email: '',
		password: '',
	};

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value, // triggering event to get ID of input field that is updated --> updating the state with the value of change in target element
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		console.log(this.state);
	};
	render() {
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit}>
					<h3 className="center-align white-text text-darken-3">Sign-In</h3>
					<div className="input-field">
						<label id="white" htmlFor="email">
							Email
						</label>
						<input type="email" id="email" onChange={this.handleChange} />
					</div>

					<div className="input-field">
						<label id="white" htmlFor="password">
							Password
						</label>
						<input type="password" id="password" onChange={this.handleChange} />
					</div>

					<div className="center-align">
						<button className="btn btn-large pink lighten-1 ">Login</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
