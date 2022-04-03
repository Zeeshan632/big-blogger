import React from "react";
import { Form, Field } from "react-final-form";

const BlogForm = (props) => {
	// handline the error
	const renderError = (meta) => {
		if (meta.error && meta.touched) {
			return <p className="form-error-message">{meta.error}</p>;
		}
	};

	// function that renders the input field
	const renderInput = ({ label, input, meta }) => {
		return (
			<div className="form-title-input-container">
				<label className="form-label">{label}</label>
				{renderError(meta)}
				<input className="form-title-input" {...input} />
			</div>
		);
	};
	// function that renders the textarea field
	const renderTextarea = ({ label, input, meta }) => {
		return (
			<div className="form-text-input-container">
				<label className="form-label">{label}</label>
				<textarea className="form-textarea" {...input}></textarea>
				{renderError(meta)}
			</div>
		);
	};

	// following will submit the form
	const onFormSubmit = (formValues) => {
		props.onSubmit(formValues);
	};

	// code for the validation of form
	const formValidation = (formValues) => {
		const errors = {};
		if (!formValues.title) {
			errors.title = "You must enter some text in the title field";
		}
		if (formValues.text) {
			const textWithoutSpaces = formValues.text.split(" ").join("");
			if (textWithoutSpaces.length < 10) {
				errors.text = "You must write at least 10 letters in your blog";
			}
		} else {
			errors.text = "You must write some text";
		}
		return errors;
	};

	return (
		<Form
			onSubmit={onFormSubmit}
			validate={formValidation}
			initialValues={props.initialValues}
			render={({ handleSubmit }) => (
				<div>
					<form onSubmit={handleSubmit} className="form-container">
						<Field name="title" component={renderInput} label="Enter Title" />
						<Field
							name="text"
							component={renderTextarea}
							label="Write Some Text"
						/>
						<button className="form-button" type="submit">
							Submit
						</button>
					</form>
				</div>
			)}
		/>
	);
};

export default BlogForm;
