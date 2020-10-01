import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectLists = ({ projects }) => {
	return (
		<div className="project-list section">
			{/* projects as a prop, cycling through IF there is a project, retunring JSX, output project summmary. --> each project summary passing down individual project and assigning key value*/}
			{projects &&
				projects.map(project => {
					return <ProjectSummary project={project} key={project.id} />;
				})}
		</div>
	);
};

export default ProjectLists;
