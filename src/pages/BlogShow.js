import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";
import { useParams } from "react-router-dom";
import BlogsList from "../components/BlogsList";

const BlogShow = () => {
	const navigate = useNavigate();

	const blogs = useSelector((state) => state.blogsList);
	const dispatch = useDispatch();
	const { getData } = bindActionCreators(actionCreators, dispatch);
	const params = useParams();

	useEffect(() => {
		getData();
	}, []);

	const blogToBeRendered = blogs[params.id];

	// checking if the data in the blogToBeRendered is retrieved or not
	if (!blogToBeRendered) {
		return <h1 className="blog-show-loading">Loading...</h1>;
	}
	return (
		<div className="blog-show-container">
			<div className="blog-container">
				<button className="home-button" onClick={() => navigate("/")}>
					Go Home
				</button>
				<h1 className="blog-heading">{blogToBeRendered.title}</h1>
				<p className="blog-text">{blogToBeRendered.text}</p>
			</div>
			<BlogsList />
		</div>
	);
};

export default BlogShow;
