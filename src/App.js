import Dashboard from "./components/Dashboard";
import ViewUser from "./components/ViewUser";
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/view/:id" element={<ViewUser />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
