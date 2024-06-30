import { useEffect, useState } from 'react';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';

function App() {
	const [toDos, setToDos] = useState([]);
	const [toDoValue, setToDoValue] = useState('');
	const persistData = (newList) => {
		localStorage.setItem('todos', JSON.stringify(newList));
	};
	const handleAddToDo = (newToDo) => {
		const newList = [...toDos, newToDo];
		persistData(newList);
		setToDos([...toDos, newToDo]);
	};
	const handleDeleteToDo = (index) => {
		const newToDoList = toDos.filter((item, itemIndex) => {
			return itemIndex !== index;
		});
		persistData(newToDoList);

		setToDos(newToDoList);
	};
	const handleEditToDo = (index) => {
		setToDoValue(toDos[index]);
		handleDeleteToDo(index);
	};
	useEffect(() => {
		let localToDos = JSON.parse(localStorage.getItem('todos'));
		if (!localToDos) return;
		setToDos(localToDos);
	}, []);
	return (
		<>
			<ToDoInput
				toDoValue={toDoValue}
				setToDoValue={setToDoValue}
				handleAddToDo={handleAddToDo}
			/>
			<ToDoList
				handleEditToDo={handleEditToDo}
				handleDeleteToDo={handleDeleteToDo}
				toDos={toDos}
			/>
		</>
	);
}

export default App;
