import React, { useEffect } from "react";
import TodoList from "./todo/todoList.js";
import Context from "./todo/context.js";
import AddTodo from "./AddTodo.js";
import Loader from "./Loder.js";
import './index.css';

function App() {
    const [todos, setTodos] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTimeout(() => {
        setTodos(todos);   
        setLoading(false); 
        }, 2000)
      })
    }, [])

    function toggleTodo(id) {
       setTodos(todos.map(todo => {
        if (todo.id === id) {
            todo.completed = !todo.completed
        }
        return todo;
       }))
    }
    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    function addTodo(title) { 
        setTodos(todos.concat({
            title,
            id: Date.now(),
            completed: false,
        }))
    }

    return (
      <Context.Provider value={{ removeTodo }}>
            <div className="wrapper">
                <h1>React Tutorial</h1>
                <AddTodo onCreate={addTodo} />
                {loading ? <Loader/> : null}
                {todos.length ? <TodoList todos={todos} onToggle={toggleTodo}/> : (
                    loading ? null : <p>No todos!</p>
                )}
            </div>
        </Context.Provider>
    );
}

export default App;