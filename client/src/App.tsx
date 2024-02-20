import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage, AddHousePage } from "./pages";
import { Navbar } from "./components/layout/Navbar";

function App() {
  return (
    <>
      <Navbar
        navItems={[
          { url: "/", title: "List properties" },
          { url: "/add-house", title: "Add a new property" },
        ]}
      />
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/add-house" element={<AddHousePage />} />
      </Routes>
    </>
  );
}

export default App;
