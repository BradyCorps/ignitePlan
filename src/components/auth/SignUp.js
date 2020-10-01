import React, { Component } from 'react';

class SignUp extends Component {
	state = {
		email: '',
		password: '',
		firstName: '',
		lastName: '',
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
					<h3 className="center-align white-text text-darken-3">Sign-Up</h3>
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

					<div className="input-field">
						<label id="white" htmlFor="First Name">
							First Name
						</label>
						<input type="text" id="First Name" onChange={this.handleChange} />
					</div>

					<div className="input-field">
						<label id="white" htmlFor="lastName">
							Last Name
						</label>
						<input type="text" id="lastName" onChange={this.handleChange} />
					</div>

					<div className="center-align">
						<button className="btn btn-large blue lighten-1">Sign-Up</button>
					</div>
				</form>
			</div>
		);
	}
}

export default SignUp;
