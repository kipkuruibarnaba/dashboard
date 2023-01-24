import Dashboard from "./components/Dashboard";
import ViewUser from "./components/ViewUser";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BrowserRouter, Routes, Route,Router, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
              {/* <Dashboard /> */}
              <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/view" element={<ViewUser/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
