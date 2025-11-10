import { useState } from "react";
import { useEffect } from "react";
import "./App.css";

function useTodo() {
  const [todos, setTodo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/todos", { method: "GET" }).then((response) => {
      response.json().then((data) => {
        console.log(data);
        setTodo(data);
      });
    });
  }, []);

  setInterval(() => {
    fetch("http://localhost:3000/todos", { method: "GET" }).then((response) => {
      response.json().then((data) => {
        console.log(data);
        setTodo(data);
      });
    });
  }, 1000);
  return todos;
}

function App() {
  const todos = useTodo();
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            {todo.title}
            {todo.description}
            <button>Delete</button>
            <br />
          </div>
        );
      })}
    </div>
  );
}

function Todo(props) {
  return (
    <div>
      {props.title};{props.description};
    </div>
  );
}

function PersonName(props) {
  return (
    <div>
      {props.firstName} {props.lastName}
    </div>
  );
}

export default App;
