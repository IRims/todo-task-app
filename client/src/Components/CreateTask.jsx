import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./pages.css";

const CreateTask = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [status, setStatus] = useState();
  const [deadline, setDeadline] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createTask", {
        title: title,
        description: description,
        status: status,
        deadline: deadline,
      })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex vh-100 back justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={Submit}>
          <h2>Add Task</h2>
          <div className="mb-2">
            <label htmlFor=""> Title</label>
            <input
              type="text"
              placeholder="Enter task title"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor=""> Description</label>
            <input
              type="text"
              placeholder="Enter task description"
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Status </label>
            <select
              class="form-select"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option selected>Select status</option>
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div className="mb-2">
            <label htmlFor=""> Deadline</label>
            <input
              type="date"
              placeholder="Select deadline"
              className="form-control"
              id="inputdate"
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
};
export default CreateTask;
