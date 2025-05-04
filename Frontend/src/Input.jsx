import { useState } from "react";
import axios from "axios";

export default function Input() {
  const [task, setTask] = useState();
  const handleAdd = () => {
    axios
      .post("http://localhost:3000/add", { task: task })
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="text-center">
        <input type="text" onChange={(e) => setTask(e.target.value)} />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </div>
    </div>
  );
}
