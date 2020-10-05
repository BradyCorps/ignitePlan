import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

// Props allows for disection of object components which can provide specific extractions (in this case, the 'ID' from the 'Params')
const ProjectDetails = props => {
	const { project, auth } = props;
	if (!auth.uid) return <Redirect to="/signin" />;
	if (project) {
		return (
			<div className="container section project-details">
				<div className="card card-design">
					<div className="card-content">
						<span className="card-title">{project.title}</span>
						<p>{project.content}</p>
					</div>
					<div className="card-action blue-grey lighten-2 white-text">
						<div>
							Posted by {project.authorFirstName} {project.authorLastName}
						</div>
						<div>Created at {project.createdAt.toDate().toDateString()}</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (
			<div className="container center">
				<p>Loading project...</p>
			</div>
		);
	}
};

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const projects = state.firestore.data.projects;
	const project = projects ? projects[id] : null;
	return {
		project: project,
		auth: state.firebase.auth,
	};
};

export default compose(
	connect(mapStateToProps),
	firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails);
