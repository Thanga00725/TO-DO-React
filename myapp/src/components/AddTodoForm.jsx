import React, { useState } from 'react';

function AddTodoForm({ onAddTodo }) {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onAddTodo({
      id: Date.now(),
      text: inputValue,
      completed: false
    });
    setInputValue('');
  };

  return (
    <form className="add-todo-form" onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
}

export default AddTodoForm;
