import React, { useState } from "react";
import PropTypes from "prop-types";

export function Input(props) {
	const [note, setNote] = useState({
		text: "",
		id: ""
	});

	const handleChange = evt => {
		setNote({
			[evt.target.name]: evt.target.value,
			id: Math.floor(Math.random() * 1000)
		});
	};

	const text = note.text;

	const handleSubmit = evt => {
		evt.preventDefault();
		if (text === "") {
			return;
		}
		props.addTodo(note);
		evt.target.reset();
		setNote({
			text: "",
			id: ""
		});
	};

	return (
		<form className="inputBody" onSubmit={handleSubmit}>
			<input
				type="text"
				name="text"
				value={text}
				// placeholder="Add a todo..."
				onChange={handleChange}
			/>
		</form>
	);
}

Input.propTypes = {
	addTodo: PropTypes.func,
	setError: PropTypes.func
};
