import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
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
		this.props.signUp(this.state); // represents new user and is passed through mapDispatch
	};

	render() {
		const { auth, authError } = this.props;
		// Route Guarding Redirecting IF there is a UID
		// Route Guarding === redirecting users to pages they are eligible to see.
		if (auth.uid) return <Redirect to="/" />;
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
						<label id="white" htmlFor="firstName">
							First Name
						</label>
						<input type="text" id="firstName" onChange={this.handleChange} />
					</div>

					<div className="input-field">
						<label id="white" htmlFor="lastName">
							Last Name
						</label>
						<input type="text" id="lastName" onChange={this.handleChange} />
					</div>

					<div className="center-align">
						<button className="btn btn-large blue lighten-1">Sign-Up</button>
						<div className="red-text center">
							{/* if autherror exists output p template else null */}
							{authError ? <p>{authError} </p> : null}
						</div>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth,
		authError: state.auth.authError, // Root reducer stores auth data on auth parameter
	};
};

const mapDispatchToProps = dispatch => {
	return {
		signUp: newUser => dispatch(signUp(newUser)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
