const DEFAULT_STATE = {
	todos: [
		{ task: "learn react", id: 0 },
		{ task: "learn redux", id: 1 },
		{ task: "put them together", id: 2 }
	],
	id: 2
};

export default function rootReducer(state = DEFAULT_STATE, action) {
	if (action.type === "ADD_TODO") {
		var newState = { ...state };
		var newTodo = {
			task: action.payload,
			id: ++newState.id
		};
		newState.todos.push(newTodo);
		return newState;
	}
	return state;
}
