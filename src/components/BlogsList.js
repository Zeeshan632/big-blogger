import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BlogsList = () => {
	const navigate = useNavigate();
	const [filterBlogs, setFilterBlogs] = useState(false);

	const blogs = useSelector((state) => Object.values(state.blogsList));
	const auth = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const { getData, deleteBlog } = bindActionCreators(actionCreators, dispatch);

	useEffect(() => {
		getData();
	}, []);

	const myBlogsClick = () => setFilterBlogs(true);
	const allBlogsClick = () => setFilterBlogs(false);

	const blogsToBeRendered = () => {
		if (!filterBlogs) {
			return blogs;
		} else {
			return blogs.filter((blog) => blog.userId === auth.userId);
		}
	};
	const renderAdminButton = (id, userId) => {
		if ((auth.userSignedIn, auth.userId === userId)) {
			return (
				<div>
					<i
						className="fa fa-edit edit-icon"
						onClick={(e) => navigateToEdit(e, id)}
					></i>
					<i
						className="fa fa-trash trash-icon"
						onClick={(e) => onDelete(e, id)}
					></i>
				</div>
			);
		}
	};

	const onDelete = (e, id) => {
		e.preventDefault();
		e.stopPropagation();
		deleteBlog(id);
	};
	const navigateToEdit = (e, id) => {
		e.preventDefault();
		e.stopPropagation();
		navigate(`/blog/edit/${id}`);
	};

	const renderList = blogsToBeRendered().map((blog) => {
		return (
			<Link
				to={`/blog/${blog.id}`}
				className="card-link"
				key={blog.id}
				onClick={() => window.scrollTo(0, 0)}
			>
				<div className="blog-card">
					{renderAdminButton(blog.id, blog.userId)}
					<h3 className="blog-card-title">{blog.title}</h3>
					<p className="blog-card-text">{blog.text.slice(0, 100)}...</p>
				</div>
			</Link>
		);
	});

	return (
		<div className="blog-cards-container">
			<h1>All Blogs</h1>
			<div className="cards-list">
				<button className="my-blogs-button" onClick={myBlogsClick}>
					My Blogs
				</button>
				<button
					className="all-blogs-button my-blogs-button"
					onClick={allBlogsClick}
				>
					All Blogs
				</button>
				{renderList}
			</div>
		</div>
	);
};

export default BlogsList;
