import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodo] = useState([
    {
      title: "go to gym",
      description: "go to gym at 11",
      id: 1,
    },
    {
      title: "go to class",
      description: "go to class at 9",
      id: 2,
    },
  ]);

  return (
    <div>
      {todos.map((todo) => {
        return <Todo title={todo.title} description={todo.description}></Todo>;
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
