import React, { useState } from 'react';
import 'bulma/css/bulma.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo('');
  }

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="container py-4">
      <form onSubmit={handleSubmit}>
        <div className="field has-addons">
          <div className="control is-expanded">
            <input className="input" type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
          </div>
          <div className="control">
            <button className="button is-info" type="submit">Add Todo</button>
          </div>
        </div>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="list-item">
            {todo}
            <button className="delete is-pulled-right" onClick={() => handleDelete(index)}></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;