import React, { Component } from 'react';

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
		console.log(this.state);
	};

	render() {
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

export default CreateProject;
