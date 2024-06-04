import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./pages.css";
import axios from "axios";
const Task = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((result) => setTasks(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handledelete = (id) => {
    if (confirm("Are you sure you want to delete!") == true) {
      axios
        .delete("http://localhost:3001/deleteTask/" + id)
        .then((res) => {
          console.log(res);
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="d-flex back vh-100 back justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <h1 className="align-items-center">List of tasks </h1>
        <Link to="/create" className="btn btn-primary">
          {" "}
          Add +{" "}
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Task Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Deadline</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((tasks) => {
              return (
                <tr>
                  <td>{tasks.title}</td>
                  <td>{tasks.description}</td>
                  <td>{tasks.status}</td>
                  <td>{tasks.deadline}</td>
                  <td>
                    <Link
                      to={`/update/${tasks._id}`}
                      className="btn btn-success"
                    >
                      update
                    </Link>

                    <button
                      className="btn btn-danger"
                      onClick={(e) => handledelete(tasks._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Task;
