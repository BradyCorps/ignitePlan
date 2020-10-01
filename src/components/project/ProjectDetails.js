import React from 'react';

// Props allows for disection of object components which can provide specific extractions (in this case, the 'ID' from the 'Params')
const ProjectDetails = props => {
	const id = props.match.params.id; //id stored in the const
	return (
		<div className="container section project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">Project Title - {id}</span>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
						officiis enim perspiciatis voluptas quidem perferendis dolorum
						voluptatibus laudantium corrupti earum.
					</p>
				</div>
				<div className="card-action grey lighten-4 grey-text">
					<div>Posted by Brady Corps</div>
					<div>1st October 11am</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectDetails;
