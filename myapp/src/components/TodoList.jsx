import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onDeleteTodo }) {
  const handleDeleteTodo = (id) => {
    onDeleteTodo(id);
    alert('Todo has been deleted!'); 
  };

  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;
