const initState = {
	authError: null,
};

const authReducer = (state = initState, action) => {
	switch (action.type) {
		case 'LOGIN_ERROR':
			console.log('ERROR');
			return {
				...state,
				authError: 'Login Failed',
			};
		case 'LOGIN_SUCCESS':
			console.log('Login Success');
			return {
				...state,
				authError: null,
			};
		case 'SIGNOUT_SUCCESS':
			console.log('signout success');
			return state;
		// Default needed always at end of case
		default:
			return state;
	}
};

export default authReducer;
