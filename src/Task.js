import React, { Component } from "react";

class Task extends Component{

	constructor(props){
		super(props);
	}

	render(){
		return(
				<div>
					<dt>{this.props.title}</dt>
				</div>
		);
	}
}
export default Task;
