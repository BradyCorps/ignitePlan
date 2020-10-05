import React from 'react';

const ProjectSummary = ({ project }) => {
	console.log(project);
	return (
		<div className="project-list section">
			<div className="card z-depth-0 card-design">
				<div className="card-content grey-text text-darken-3">
					<span className="card-title">{project.title}</span>
					<p className="white-text">
						Posted by {project.authorFirstName} {project.authorLastName}
					</p>
					<p className="grey-text">
						Created at {project.createdAt.toDate().toDateString()}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProjectSummary;
