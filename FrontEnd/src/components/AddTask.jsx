import React, { useState } from "react";
import { addNewTask } from "../store/tasks";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AddTask = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewTask({ task: task }));
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      {/* <input
                type='text'
                name='task'
                placeholder='Enter new task...'
                value={task}
                onChange={(e) => setTask(e.target.value)}
            /> */}
      <TextField
        id="outlined-basic"
        label="Enter new task"
        variant="outlined"
        style={{ marginTop: "40px" }}
        type="text"
        name="task"
        placeholder="Enter new task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <Button variant="outlined" type='submit'  style={{ marginTop: "40px", height:'55px' }}>Add Task</Button>
      {/* <button type='submit'>Add Task</button> */}
    </form>
  );
};

export default AddTask;
