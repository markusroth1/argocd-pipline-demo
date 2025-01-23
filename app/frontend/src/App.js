import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import logo from './assets/logo_neu.png';  // Importiere das Bild

function App() {
  const [todos, setTodos] = useState([]);
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL || "http://localhost:3000";

  // Fetch initial data from backend
  useEffect(() => {
    fetch(`${apiBaseUrl}/api/todos`)
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  const addTodo = (todo) => {
    fetch(`${apiBaseUrl}/api/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(todo),
    })
      .then((response) => response.json())
      .then((newTodo) => setTodos([...todos, newTodo]));
  };

  const deleteTodo = (id) => {
    fetch(`${apiBaseUrl}/api/todos/${id}`, {
      method: "DELETE",
    }).then(() => setTodos(todos.filter((todo) => todo.id !== id)));
  };

  return (
    <div className="App">
      <header>
        <img src={logo} alt="Logo" style={{ width: '150px', height: 'auto' }} />  {/* Logo anzeigen */}
        <h1>To-Do App</h1>
      </header>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
