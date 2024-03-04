import TodoItem from '../TodoItem/TodoItem';

function TodoList({ todos, toggleTodo, deleteTodo }) {
	return (
		<ul className="list">
			{todos.length === 0 && 'No todos!'}
			{todos.map(item => (
				<TodoItem
					{...item}
					key={item.id}
					deleteTodo={deleteTodo}
					toggleTodo={toggleTodo}
				/>
			))}
		</ul>
	);
}
export default TodoList;
