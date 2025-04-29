import { useState } from "react";
import Input from "./Input";

export default function Home() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="text-center">
      <h2>Todo List</h2>
      <Input />
      {todos.length === 0 ? (
        <h2>No Todos</h2>
      ) : (
        todos.map((todo) => {
          todo;
        })
      )}
    </div>
  );
}
