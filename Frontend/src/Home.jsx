import { useEffect, useState } from "react";
import Input from "./Input";
import axios from "axios";
import {
  BsFillCheckCircleFill,
  BsCircleFill,
  BsFillTrashFill,
} from "react-icons/bs";

export default function Home() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/get")
      .then((res) => {
        console.log(res.data);
        setTodos(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  const handleEdit = (id) => {
    axios
      .put(`http://localhost:3000/update/${id}`)
      .then((res) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/delete/${id}`)
      .then((res) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Todo List</h2>
      <div className="d-flex justify-content-center mb-4">
        <Input />
      </div>
      <div className="list-group w-75 mx-auto">
        {todos.length === 0 ? (
          <p className="list-group-item text-center text-muted">
            No Todos yet!!
          </p>
        ) : (
          todos.map((todo) => (
            <div
              key={todo._id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <div
                className="d-flex align-items-center me-3"
                onClick={() => handleEdit(todo._id)}
                style={{ cursor: "pointer", flexGrow: 1 }}
              >
                {todo.done ? (
                  <BsFillCheckCircleFill className="text-success me-2" />
                ) : (
                  <BsCircleFill className="me-2" />
                )}
                <span
                  style={{
                    textDecoration: todo.done ? "line-through" : "none",
                  }}
                >
                  {" "}
                  {todo.task}
                </span>
              </div>
              <div>
                <BsFillTrashFill
                  className="text-Danger"
                  onClick={() => handleDelete(todo._id)}
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
