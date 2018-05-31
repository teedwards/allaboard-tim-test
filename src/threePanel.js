import React, { Component } from "react";
import TodoList from "./TodoList";
import "./index.css";

class ThreePanel extends Component{

	constructor(props){
		super(props);

		this.state = {
			panelThree : this.props.panelThree,
			panelTwo : this.props.panelTwo,
			panelOne : this.props.panelOne
		};
	}

	changeList(){
		var temp = this.state.items;

		this.setState((prevState) => {
			return {
				items: prevState.otherItems,
				otherItems: temp
			};
		});
		console.log(this.state.items)
	}

	componentWillReceiveProps(nextProps) {
  	this.setState({ panelThree: nextProps.panelThree, panelTwo: nextProps.panelTwo, panelOne: nextProps.panelOne});
	}


	render(){
		return(
			<div className="wrapper">
				<div className="navBar">
				All Aboard
				</div>


				<div className="panelOne">
					<div id="panelTitle" > Modules </div>
					<div className="panelContent">{this.state.panelOne}</div>
				</div>

				<div className="panelTwo">
				<div id="panelTitle"> Activities </div>
					<div className="panelContent">{this.state.panelTwo}</div>
				</div>

				<div className="panelThree">
					<div id="panelTitle"> Tasks </div>
					<div className="panelContent">{this.state.panelThree}</div>
				</div>
			</div>
		);

	};


}
export default ThreePanel;
