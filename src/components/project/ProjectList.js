import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectLists = ({ projects }) => {
	return (
		<div className="project-list section">
			{/* projects as a prop, cycling through IF there is a project, retunring JSX, output project summmary. --> each project summary passing down individual project and assigning key value*/}
			{projects &&
				projects.map(project => {
					return (
						// the key must be associated with the parent element. this removes 'Unique Key' error
						<Link to={'/project/' + project.id} key={project.id}>
							<ProjectSummary project={project} />
						</Link>
					);
				})}
		</div>
	);
};

export default ProjectLists;
