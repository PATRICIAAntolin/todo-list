import React, { useState } from "react";
import { Input } from "./Input";
import { Todo } from "./List";

export function Home() {
	const [todos, setTodos] = useState([]);

	const addTodo = todo => {
		setTodos([...todos, todo]);
	};

	const deleteTodo = id => {
		const listFiltered = todos.filter(item => item.id !== id);
		setTodos([...listFiltered]);
	};

	return (
		<div className="container">
			<div className="appTitle">
				<p>todos</p>
			</div>
			<div className="todoListBody">
				<Input addTodo={addTodo} />
				{todos.length === 0 ? <p>No tasks, add a task</p> : null}
				{todos.map(todo => (
					<Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
				))}
				<div className="todosLength">
					<p>{`${todos.length} items left`}</p>
				</div>
			</div>
		</div>
	);
}
