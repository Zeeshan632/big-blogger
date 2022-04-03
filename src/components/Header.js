import React from "react";
import { Link } from "react-router-dom";
import Auth from "./GoogleAuth";

const Header = () => {
	return (
		<div className="header">
			<div>
				<Link to="/" className="logo">
					<h2>Big Blogger</h2>
				</Link>
			</div>
			<div className="navbar">
				<Auth />
			</div>
		</div>
	);
};

export default Header;
