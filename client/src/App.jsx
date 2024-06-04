import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./Components/pages.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task from "./Components/Tasks";
import UpdateTask from "./Components/UpdateTask";
import CreateTask from "./Components/CreateTask";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <BrowserRouter>
        <div className="d-flex">
          <div className="col-auto">
            <Sidebar />
          </div>
        </div>
        <Sidebar>

        <Routes>
          <Route path="/" element={<Task />}></Route>
          <Route path="/create" element={<CreateTask />}></Route>
          <Route path="/update/:id" element={<UpdateTask />}></Route>
        </Routes>
        </Sidebar>
      </BrowserRouter> */}
      <BrowserRouter>
       
          <Routes>
            <Route path="/" element={<Task />} />
            <Route path="/create" element={<CreateTask />} />
            <Route path="/update/:id" element={<UpdateTask />} />
          </Routes>
       
      </BrowserRouter>
    </>
  );
};

export default App;
