import React from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";

const GoogleAuth = () => {
	const userAuthentication = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const { logIn, logOut } = bindActionCreators(actionCreators, dispatch);

	const onLogInSuccess = (response) => {
		logIn(response.Du.FW, response.Du.VX);
	};
	const onLogOutSuccess = () => {
		logOut();
	};

	const renderButton = () => {
		if (!userAuthentication.userSignedIn) {
			return (
				<GoogleLogin
					className="button"
					clientId="61435122555-m8tb5q88js903glq5qce3gse9osfdta4.apps.googleusercontent.com"
					buttonText="Login with Google"
					onSuccess={onLogInSuccess}
					isSignedIn={true}
					onFailure={(response) => console.log(response)}
					cookiePolicy="single_host_origin"
				/>
			);
		} else {
			return (
				<GoogleLogout
					clientId="61435122555-m8tb5q88js903glq5qce3gse9osfdta4.apps.googleusercontent.com"
					buttonText="Logout"
					onLogoutSuccess={onLogOutSuccess}
				/>
			);
		}
	};
	return <div>{renderButton()}</div>;
};

export default GoogleAuth;
