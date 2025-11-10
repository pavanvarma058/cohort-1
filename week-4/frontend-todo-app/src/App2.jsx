import { useState } from "react";
import "./App.css";

let ctr = 0;
function App() {
  const [todos, setTodo] = useState({
    title: "go to gym",
    description: "go to gym at 11",
    id: 1,
  });

  if (ctr === 0) {
    setInterval(() => {
      setTodo({
        title: "go to gym please please" + Math.random(),
        description: "go to gym at 11",
        id: 1,
      });
    }, 5000);

    ctr = 1;
  }

  return (
    <div>
      {todos.title}
      {todos.description}
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
