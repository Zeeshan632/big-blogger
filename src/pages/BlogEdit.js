import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import BlogForm from "../components/BlogForm";

const BlogEdit = () => {
	const navigate = useNavigate();

	const blogs = useSelector((state) => state.blogsList);

	const dispatch = useDispatch();
	const { editBlog } = bindActionCreators(actionCreators, dispatch);

	const params = useParams();
	const blogToBeEdited = blogs[params.id];

	const onFormSubmit = (formValues) => {
		editBlog(params.id, formValues).then(() => navigate("/"));
	};
	return (
		<div className="blog-edit-page">
			<button className="blog-write-home-button" onClick={() => navigate("/")}>
				Go Home
			</button>
			<h1>Edit Your Blog</h1>
			<BlogForm
				onSubmit={onFormSubmit}
				initialValues={{
					title: blogToBeEdited.title,
					text: blogToBeEdited.text,
				}}
			/>
		</div>
	);
};

export default BlogEdit;
