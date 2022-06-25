import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import LandingPage from "./pages/LandingPage";
import BlogShow from "./pages/BlogShow";
import BlogWrite from "./pages/BlogWrite";
import BlogEdit from "./pages/BlogEdit";
// import "./styling.css";

const App = () => {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/write" element={<BlogWrite />} />
				<Route path="/blog/:id" element={<BlogShow />} />
				<Route path="/blog/edit/:id" element={<BlogEdit />} />
			</Routes>
		</Router>
	);
};

export default App;
