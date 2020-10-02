export const createProject = project => {
	return (dispatch, getState, { getFirebase, getFirestore }) => {
		// make async call to database
		const firestore = getFirestore();
		// async code for adding project to database
		firestore
			.collection('projects')
			.add({
				// spread operator same as using project.title && project.content
				...project,
				authorFireName: 'Brady',
				authorLastName: 'Corps',
				authorId: 12345,
				createAt: new Date(),
				// then method fires when action is complete --> doc added to collection
			})
			.then(() => {
				dispatch({ type: 'CREATE_PROJECT', project });
				// Catching error --> setting different dispatch for error
			})
			.catch(err => {
				dispatch({ type: 'CREATE_PROJECT_ERROR', err });
			});
	};
};
