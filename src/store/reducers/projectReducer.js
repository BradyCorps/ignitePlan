const initState = {
	projects: [
		{ id: '1', title: 'Dummy1', content: 'lorem Ipsum Text' },
		{ id: '2', title: 'Dummy2', content: 'lorem Ipsum Text' },
		{ id: '3', title: 'Dummy3', content: 'lorem Ipsum Text' },
	],
};

const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_PROJECT':
			console.log('created project', action.project);
			return state;
		case 'CREATE_PROJECT_ERROR':
			console.log('create project error', action.error);
			return state;
		// default to catch cases that don't meet prior parameters
		default:
			return state;
	}
};

export default projectReducer;
