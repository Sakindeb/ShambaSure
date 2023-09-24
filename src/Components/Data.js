import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function AddTodo() {
  const [stage, setStage] = useState(""); // State for the stage
  const [tasks, setTasks] = useState([]); // State for tasks associated with the stage
  const [task, setTask] = useState(""); // State for the task input

  const handleStageChange = (e) => {
    setStage(e.target.value);
  };

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim() === "") {
      return;
    }

    // Create a new task object
    const newTask = {
      task: task,
      completed: false,
    };

    // Add the new task to the tasks array for the current stage
    setTasks([...tasks, newTask]);

    // Clear the task input field after adding
    setTask("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (stage !== "") {
      // Create a new stage object with tasks
      const newStage = {
        stage: stage,
        tasks: tasks,
      };

      // Add the new stage to the Firestore collection
      await addDoc(collection(db, "stages"), newStage);

      // Clear the input fields and reset the tasks array
      setStage("");
      setTasks([]);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input_container">
        <input
          type="text"
          placeholder="Enter stage..."
          value={stage}
          onChange={handleStageChange}
        />
        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={handleTaskChange}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="btn_container">
        <button type="submit">Add Stage</button>
      </div>
    </form>
  );
}
