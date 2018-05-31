import React, {Component} from "react";
import FlipMove from "react-flip-move";
import Task from "./Task.js";

class TodoItems extends Component{

	constructor(props){
		super(props);

		this.createTasks = this.createTasks.bind(this);
	}

	change(key){
		this.props.change(key);
	}

	createTasks(item) {
		return (
				<li className="aTask" onClick={() => this.change(item.key)} key={item.key}>
					<Task
							title = {item.title}
					/>
				</li>
			);
	}

	render(){
		var todoEntries = this.props.entries;
		var listItems = todoEntries.map(this.createTasks);

		return(
				<ul className="theList">
						{listItems}
				</ul>
		);

	}
};

export default TodoItems;
