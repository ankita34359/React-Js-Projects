import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store todos
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Add a new todo
  const addTodo = () => {
    if (inputValue.trim() === '') return; // Prevent empty input

    setTodos([...todos, inputValue.trim()]); // Add new todo to the list
    setInputValue(''); // Clear the input field
  };

  // Delete a todo
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index); // Remove todo by index
    setTodos(newTodos);
  };

  // Edit a todo
  const editTodo = (index) => {
    const updatedTodo = prompt('Update the task:', todos[index]);
    if (updatedTodo && updatedTodo.trim() !== '') {
      const newTodos = todos.map((todo, i) => (i === index ? updatedTodo.trim() : todo));
      setTodos(newTodos);
    }
  };

  return (
    <div className="container">
      <h1>To-Do App</h1>

      {/* Input field and Add button */}
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Update state with input
          placeholder="Add your task here..."
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {/* Todo list */}
      <ul id="todoList">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <div>
              <button className="edit-btn" onClick={() => editTodo(index)}>
                Edit
              </button>
              <button className="delete-btn" onClick={() => deleteTodo(index)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

