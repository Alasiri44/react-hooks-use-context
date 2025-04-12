import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { UserProvider } from "./context/user";
import "./index.css";

ReactDOM.render(<UserProvider><App /></UserProvider>, document.getElementById("root"));
