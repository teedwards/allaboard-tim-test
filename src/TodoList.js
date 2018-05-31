import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {

	constructor(props){
		super(props);

		this.state = {
			items: this.props.items,
		};

		this.addItem = this.addItem.bind(this);
		this.deleteItem = this.deleteItem.bind(this);
	}

	componentWillReceiveProps(nextProps) {
  	this.setState({ items: nextProps.items });
	}

	deleteItem(key){
		var filteredItems = this.state.items.filter(function (item){
			return (item.key !== key);
		});

		this.setState({
			items: filteredItems
		});
	}

	change(key){
		this.props.change(key);
	}

	addItem(e){
		if(this._inputElement.value !== ""){
			var newItem = {
				title: this._inputElement.value,
				description: this._inputElement2.value,
				key: Date.now()
			}


			this.setState((prevState) => {
				return {
					items: prevState.items.concat(newItem)
				};
			});

			 this._inputElement.value = "";
			 this._inputElement2.value = "";
		}

		console.log(this.state.items);
		e.preventDefault();
	}

	render(){
		return(
			<div className="todoListMain">
			{/*
				<div className="header">
					<form  className="lock" onSubmit={this.addItem}>
						<input ref={(a) => this._inputElement = a}
							placeholder="enter task">
						</input>
						<input ref={(a) => this._inputElement2 = a}
							placeholder='enter description'>
						</input>
						<button type="submit">add</button>
					</form>
				</div>
				*/}
				<TodoItems entries={this.state.items}
							change={this.props.change}/>

			</div>

		)
	}
}

export default TodoList;
