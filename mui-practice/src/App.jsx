import { Route, Routes } from "react-router-dom";
import "./App.css";
import { T1Typography } from "./pages/T1Typography";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/typography" element={<T1Typography />} />
      </Routes>
    </div>
  );
}

export default App;
