import { combineReducers } from "redux";
import authReducer from "./authReducer";
import gettingData from "./gettingData";

export default combineReducers({
	auth: authReducer,
	blogsList: gettingData,
});
