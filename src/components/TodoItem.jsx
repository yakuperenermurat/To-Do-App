import React from 'react';

function TodoItem({ todo, toggleTodo, removeTodo }) {
  return (
    <li className={todo.completed ? 'completed' : ''}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
        <label>{todo.text}</label>
        <button className="destroy" onClick={() => removeTodo(todo.id)}></button>
      </div>
    </li>
  );
}

export default TodoItem;
