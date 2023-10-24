import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DropDown from "./components/dropdown";
import CheckBox from "./components/checkbox";
import Pagination from "./components/pagination";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/dropdown">DropDown</Link>
            </li>
            <li>
              <Link to="/checkbox">CheckBox</Link>
            </li>
            <li>
              <Link to="/pagination">Pagination</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/dropdown" element={<DropDown />}></Route>
          <Route path="/checkbox" element={<CheckBox />}></Route>
          <Route path="/pagination" element={<Pagination />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
