import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectLists from '../project/ProjectList';
import { connect } from 'react-redux'; // connects redux with react
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
	render() {
		// console.log(this.props);
		const { projects, auth } = this.props;
		// If this IS NOT authenticated --> return redirect
		if (!auth.uid) return <Redirect to="/signin" />;

		return (
			<div className="dashboard container">
				<div className="row">
					<div className="col s12 m6">
						<ProjectLists projects={projects}></ProjectLists>
					</div>
					<div className="col s12 m5 offset-m1">
						<Notifications></Notifications>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		// no longer outputting dummy data, now outputting data from firestore
		projects: state.firestore.ordered.projects,
		auth: state.firebase.auth,
	};
};

// when component is active, project collection is listened too, inducing firestore reducer when firebase data is changed
// database === change --> component will hear and trigger firestore reducer to change --> when component is active on page
// synced with projects collection in firestore
export default compose(
	connect(mapStateToProps),
	firestoreConnect([{ collection: 'projects' }])
)(Dashboard);
