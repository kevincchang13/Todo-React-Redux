import React, { Component } from "react";

class Todo extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<ul>
					<li>task: {this.props.task}</li>
				</ul>
			</div>
		);
	}
}

export default Todo;
