import ToDoCard from './ToDoCard';

export default function ToDoList(props) {
	const { toDos } = props;
	return (
		<div>
			<ul className="main">
				{toDos.map((toDo, toDoindex) => {
					return (
						<ToDoCard {...props} index={toDoindex} key={toDoindex}>
							<p>{toDo}</p>
						</ToDoCard>
					);
				})}
			</ul>
		</div>
	);
}
