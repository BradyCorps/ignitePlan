import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

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
		this.props.signIn(this.state);
	};
	render() {
		const { authError, auth } = this.props;
		// Route Guarding Redirecting IF there is a UID
		if (auth.uid) return <Redirect to="/" />;

		return (
			<div className="container">
				<form onSubmit={this.handleSubmit}>
					<h3 className="center-align white-text text-darken-3">
						Sign-In
						<span role="img" aria-label="login">
							🗳️
						</span>
					</h3>
					<div className="input-field">
						<label id="white" htmlFor="email">
							<span role="img" aria-label="email">
								📧{' '}
							</span>
						</label>
						<input
							className="color-white"
							type="email"
							id="email"
							onChange={this.handleChange}
						/>
					</div>

					<div className="input-field">
						<label id="white" htmlFor="password">
							<span role="img" aria-label="key">
								🔑
							</span>
						</label>
						<input
							className="color-white"
							type="password"
							id="password"
							onChange={this.handleChange}
						/>
					</div>

					<div className="center-align">
						<button className="btn btn-large pink lighten-1 radius ">
							Login
						</button>
						<div className="red-text center">
							{/* Ternerary operator dictating if something returns === error */}
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
		// RootReducer stored on auth property --> authReducer is called authError
		authError: state.auth.authError,
		auth: state.firebase.auth,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		signIn: creds => dispatch(signIn(creds)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
