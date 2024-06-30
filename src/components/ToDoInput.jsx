import React, { useState } from 'react';

export default function ToDoInput({ handleAddToDo, toDoValue, setToDoValue }) {
	const onKeyDown = (e) => {
		if (e.key == 'Enter') {
			handleAddToDo(toDoValue);
			setToDoValue('');
		}
	};
	return (
		<header>
			<input
				type="text"
				placeholder="Enter todo..."
				onChange={(e) => {
					setToDoValue(e.target.value);
				}}
				onKeyDown={onKeyDown}
				value={toDoValue}
			/>
			<button
				onClick={() => {
					handleAddToDo(toDoValue);
					setToDoValue('');
				}}
			>
				Add
			</button>
		</header>
	);
}
