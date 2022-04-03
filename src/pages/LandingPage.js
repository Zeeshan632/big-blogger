import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import GoogleAuth from "../components/GoogleAuth";
import BlogsList from "../components/BlogsList";

const LandingPage = () => {
	const auth = useSelector((state) => state.auth);

	const renderHeading = () => {
		if (auth.userSignedIn) {
			return <h1 className="user-name">{`Welcome ${auth.userName}`}</h1>;
		} else {
			return (
				<>
					<h1>Big Blogger</h1>
					<p>This is the place where you can share your blogs</p>
				</>
			);
		}
	};

	const renderButton = () => {
		if (!auth.userSignedIn) {
			return <GoogleAuth />;
		} else {
			return (
				<Link to="/write" className="blog-write-button">
					Write your blog
				</Link>
			);
		}
	};

	return (
		<div className="landing-page">
			<div className="page-top">
				{renderHeading()}
				{renderButton()}
			</div>
			<BlogsList />
		</div>
	);
};

export default LandingPage;
