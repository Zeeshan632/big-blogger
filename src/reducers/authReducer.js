const authReducer = (state = {}, action) => {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				userSignedIn: true,
				...action.payload,
			};
		case "LOGOUT":
			return {
				...state,
				userSignedIn: false,
				...action.payload,
			};
		default:
			return state;
	}
};

export default authReducer;
