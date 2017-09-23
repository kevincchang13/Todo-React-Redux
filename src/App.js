import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import rootReducer from "./rootReducer";
import TodoList from "./TodoList";

const store = createStore(
  rootReducer,
  compose(
    typeof window === "object" &&
    typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : f => f
  )
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
