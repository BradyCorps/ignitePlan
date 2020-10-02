import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions';
import { Redirect } from 'react-router-dom';

class CreateProject extends Component {
	state = {
		title: '',
		content: '',
	};

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value, // triggering event to get ID of input field that is updated --> updating the state with the value of change in target element
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		// console.log(this.state);
		this.props.createProject(this.state);
	};

	render() {
		const { auth } = this.props;
		if (!auth.uid) return <Redirect to="/signin" />;
		return (
			<div className="container">
				<form onSubmit={this.handleSubmit}>
					<h3 className="center-align white-text text-darken-3">
						Create New Project
					</h3>
					<div className="input-field">
						<label id="white" htmlFor="title">
							Title
						</label>
						<input type="text" id="title" onChange={this.handleChange} />
					</div>

					<div className="input-field">
						<label id="white" htmlFor="content">
							Project Content
						</label>
						<textarea
							id="content"
							className="materialize-textarea"
							onChange={this.handleChange}
						></textarea>
					</div>

					<div className="center-align">
						<button className="btn btn-large green lighten-1 z-depth-0">
							Create
						</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.firebase.auth,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		createProject: project => dispatch(createProject(project)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
