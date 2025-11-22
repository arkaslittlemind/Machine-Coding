import { useState } from "react";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  // helper function to add todo
  const handleAddTodo = () => {
    if (input.trim() === "") return; // edge case to handle empty input and spaces

    const todoItem = {
      id: todoList.length + 1,
      text: input.trim(),
      completed: false,
    };
    setTodoList((previousValue) => [...previousValue, todoItem]);
    setInput(""); // after registering todo clear input field
  };

  // helper function to toggle todo state (completed or not completed)
  const handleToggleTodo = (id) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        } else {
          return todo;
        }
      })
    );
  };

  // helper function to delete a todo
  const handleDeleteTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => handleAddTodo()}>Add</button>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <span className={todo.completed ? "strikeThrough" : ""}>
              {todo.text}
            </span>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
