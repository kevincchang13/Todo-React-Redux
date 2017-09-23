import React, { Component } from "react";

class NewTodoForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			task: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
	}

	handleAdd(e) {
		e.preventDefault();
		this.props.handleAdd(this.state.task);
		this.setState({
			task: ""
		});
	}

	handleChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	render() {
		return (
			<form onSubmit={this.handleAdd}>
				<label>Task: </label>
				<input
					type="text"
					placeholder="Task Name"
					value={this.state.task}
					name="task"
					onChange={this.handleChange}
				/>
				<button>Add Todo</button>
			</form>
		);
	}
}

export default NewTodoForm;
