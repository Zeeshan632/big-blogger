import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";
import BlogForm from "../components/BlogForm";
import { useNavigate } from "react-router-dom";

const BlogWrite = () => {
	const navigate = useNavigate();

	const dispatch = useDispatch();
	const { writeBlog } = bindActionCreators(actionCreators, dispatch);

	const onFormSubmit = (formValues) => {
		writeBlog(formValues).then(() => navigate("/"));
	};

	return (
		<div
			style={{
				paddingTop: "150px",
				paddingLeft: "100px",
				position: "relative",
			}}
		>
			<button className="blog-write-home-button" onClick={() => navigate("/")}>
				Go Home
			</button>
			<h1>Write Your Blog</h1>
			<BlogForm onSubmit={onFormSubmit} />
		</div>
	);
};

export default BlogWrite;
