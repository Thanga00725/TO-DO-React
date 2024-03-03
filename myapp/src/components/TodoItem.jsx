import React, { useState } from 'react';

function TodoItem({ todo, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    console.log('Edited todo:', editedText);
  };

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <div className="todo-item">
      {!isEditing ? (
        <>
          <input type="checkbox" checked={todo.completed} onChange={() => console.log('Toggle todo')}/>
          <span className="todo-text">{todo.text}</span>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => onDelete(todo.id)}>Delete</button>
        </>
      ) : (
        <>
          <input type="text" value={editedText} onChange={handleChange} />
          <button onClick={handleSave}>Save</button>
        </>
      )}
    </div>
  );
}

export default TodoItem;
