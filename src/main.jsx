import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ScrollToTop style={{width:"30px"}} smooth color="#6f00ff" />
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
