import { useEffect, useState } from 'react';
import '../src/style.css';
import Form from './assets/NewForm/NewForm';
import TodoList from './assets/TodoList/TodoList';
function App() {
	const [todos, setTodos] = useState(getInitialTodos);

	function getInitialTodos() {
		const localValue = localStorage.getItem('ITEMS');
		return localValue ? JSON.parse(localValue) : [];
	}
	console.log(todos);
	function toggleTodo(id, completed) {
		setTodos(currentTodos => {
			return currentTodos.map(todo => {
				if (todo.id === id) {
					return { ...todo, completed };
				}
				return todo;
			});
		});
	}

	function addTodo(title) {
		setTodos(prevTodos => [
			...prevTodos,
			{ id: crypto.randomUUID(), title, completed: false }
		]);
	}
	useEffect(() => {
		localStorage.setItem('ITEMS', JSON.stringify(todos));
	}, [todos]);
	function deleteTodo(id) {
		setTodos(currentTodos => {
			return currentTodos.filter(todo => todo.id !== id);
		});
	}
	return (
		<>
			<Form addTodo={addTodo} />
			<h1 className="header">Todo List</h1>
			<TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
		</>
	);
}

export default App;
