/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos
*/
class Todo {
  constructor() {
    this.todos = [];
  }
  add(todo) {
    this.todos.push(todo);
  }
  remove(i) {
    if (i >= 0 && i < this.todos.length) {
      this.todos.splice(i, 1);
    } else {
      console.error("Invalid Index");
      return;
    }
  }
  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    } else {
      console.error("Invalid Index");
      return;
    }
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    } else {
      console.error("Invalid Index");
      return;
    }
  }

  clear() {
    this.todos = [];
  }
}

const todoList = new Todo();

todoList.add("Finish the homework");
todoList.add("Reading");
todoList.add("Meditation");

console.log(todoList.getAll());

todoList.remove(1);

console.log(todoList.getAll());

todoList.update(0, "Homework");

todoList.add("workout");

console.log(todoList.getAll());

console.log(todoList.get(2));

todoList.clear();

console.log(todoList);
