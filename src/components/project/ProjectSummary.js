import React from 'react';

const ProjectSummary = ({ project }) => {
	return (
		<div className="project-list section">
			<div className="card z-depth-0 card-design">
				<div className="card-content grey-text text-darken-3">
					<span className="card-title">{project.title}</span>
					<p className="white-text">Posted by Brady Corps</p>
					<p className="grey-text">October 1st 10am</p>
				</div>
			</div>
		</div>
	);
};

export default ProjectSummary;
