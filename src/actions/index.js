import { db } from "../firebase.config";
import {
	collection,
	getDocs,
	addDoc,
	serverTimestamp,
	doc,
	deleteDoc,
	updateDoc,
} from "firebase/firestore";

export const logIn = (userId, userName) => {
	return {
		type: "LOGIN",
		payload: {
			userId: userId,
			userName: userName,
		},
	};
};
export const logOut = () => {
	return {
		type: "LOGOUT",
		payload: {
			userId: null,
			userName: null,
		},
	};
};

export const getData = () => async (dispatch) => {
	const colRef = collection(db, "blogs");
	const data = await getDocs(colRef);
	const allBlogs = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

	dispatch({ type: "GET_DATA", payload: allBlogs });
};

export const writeBlog = (formValues) => async (dispatch, getState) => {
	const auth = getState().auth;
	const colRef = collection(db, "blogs");
	await addDoc(colRef, {
		title: formValues.title,
		text: formValues.text,
		userId: auth.userId,
		createdAt: serverTimestamp(),
	});
	dispatch({ type: "WRITE_BLOG" });
};

export const deleteBlog = (id) => async (dispatch) => {
	const docRef = doc(db, "blogs", id);
	await deleteDoc(docRef);

	dispatch({ type: "DELETE_BLOG", payload: id });
};

export const editBlog = (id, formValues) => async (dispatch, getState) => {
	const auth = getState().auth;
	const docRef = doc(db, "blogs", id);
	await updateDoc(docRef, {
		title: formValues.title,
		text: formValues.text,
		userId: auth.userId,
		createdAt: serverTimestamp(),
	});
	dispatch({ type: "EDIT_BLOG" });
};
