import "./App.css";
import ParentComponent from "./Components/ParentComponent";
import TextEditor from "./TextEditor";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<ParentComponent />}></Route>
          <Route exact path="/TextEditor" element={<TextEditor />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

