import React from 'react';

export default function ToDoCard({
	children,
	handleDeleteToDo,
	index,
	handleEditToDo,
}) {
	return (
		<>
			<li className="todoItem">
				{children}
				<div className="actionsContainer">
					<button
						onClick={() => {
							handleEditToDo(index);
						}}
					>
						<i className="fa-solid fa-pen-to-square"></i>
					</button>
					<button
						onClick={() => {
							handleDeleteToDo(index);
						}}
					>
						<i className="fa-solid fa-trash-can"></i>
					</button>
				</div>
			</li>
		</>
	);
}
