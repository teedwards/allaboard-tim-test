import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import TaskBoard from "./TaskBoard.js";

var destination = document.querySelector("#container")

ReactDom.render(
		<TaskBoard />,
	destination

);
