import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage, AddHousePage } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/add-house" element={<AddHousePage />} />
      </Routes>
    </>
  );
}

export default App;
