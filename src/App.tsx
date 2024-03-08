import React from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to={`content`}>Your Name</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
