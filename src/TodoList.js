import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import * as actions from "./actions";

class TodoList extends Component {
	constructor(props) {
		super(props);
		this.handleAdd = this.handleAdd.bind(this);
	}

	handleAdd(task) {
		this.props.addTodo(task);
	}

	render() {
		let todos = this.props.todos.map(t => (
			<Todo task={t.task} id={t.id} key={t.id} />
		));
		return (
			<div>
				<div>
					<NewTodoForm handleAdd={this.handleAdd} />
				</div>
				<div>
					<h1>My Todos:</h1>
					{todos}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	debugger;
	return {
		todos: state.todos
	};
}

export default connect(mapStateToProps, actions)(TodoList);
