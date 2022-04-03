import _ from "lodash";

const gettingData = (state = {}, action) => {
	switch (action.type) {
		case "GET_DATA":
			return { ...state, ..._.mapKeys(action.payload, "id") };
		case "WRITE_BLOG":
			return { ...state };
		case "EDIT_BLOG":
			return { ...state };
		case "DELETE_BLOG":
			return _.omit(state, action.payload);
		default:
			return state;
	}
};

export default gettingData;
