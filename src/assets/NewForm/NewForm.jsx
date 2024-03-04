import { useState } from 'react';

function Form({ addTodo }) {
	const [newItem, setNewItem] = useState('');
	function addItem(e) {
		setNewItem(e.target.value);
	}

	function handleOnSubmit(e) {
		e.preventDefault();
		if (newItem == '') {
			return;
		}
		addTodo(newItem);
		setNewItem('');
	}
	return (
		<form onSubmit={handleOnSubmit} className="new-item-form ">
			<div className="form-row">
				<label htmlFor="item">New item</label>
				<input
					value={newItem}
					onChange={addItem}
					type="text"
					name=""
					id="item"
				/>
				<button className="btn">Add</button>
			</div>
		</form>
	);
}

export default Form;
