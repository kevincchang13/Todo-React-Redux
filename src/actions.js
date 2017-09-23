export function addTodo(task) {
	return {
		type: "ADD_TODO",
		payload: task
	};
}

export function removeTodo(id) {
	return {
		type: "REMOVE_TODO",
		payload: id
	};
}
