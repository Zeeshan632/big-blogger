import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyD3S0lljuCoZZHCnvQZlRAvioK4OxjNXZo",
	authDomain: "big-blogger-d3bd4.firebaseapp.com",
	projectId: "big-blogger-d3bd4",
	storageBucket: "big-blogger-d3bd4.appspot.com",
	messagingSenderId: "814770844163",
	appId: "1:814770844163:web:9d19a18d8c464214835436",
	measurementId: "G-HR722KH59V",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore();
