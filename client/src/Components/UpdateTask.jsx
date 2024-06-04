import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./pages.css";



function UpdateTask() {
  const { id } = useParams();
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [status, setStatus] = useState();
  const [deadline, setDeadline] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    {
      axios
        .get("http://localhost:3001/getUser/" + id)
        .then((result) => {
          console.log(result);
          setTitle(result.data.title);
          setDescription(result.data.description);
          setStatus(result.data.status);
          setDeadline(result.data.deadline);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  const Update = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/updateUser/" + id, { name: title, email: description, age: status })
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="d-flex vh-100 back  justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
          <form onSubmit={Update}>
            <h2>Update task</h2>
            <div className="mb-2">
              <label htmlFor="">Title </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-2">
              <label htmlFor="">Description </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter task description"
                value={description}
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
              <label htmlFor="">Deadline </label>
              <input
                type="date"
                className="form-control"
                placeholder="Select deadline"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </div>

            <button className="btn btn-success">Update</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateTask;
