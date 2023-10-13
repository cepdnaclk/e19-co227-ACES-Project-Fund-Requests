import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentHome from "./Pages/StudentHome";
import AdminHome from "./Pages/AdminHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<StudentHome />} />
        <Route path="/admin" element={<AdminHome></AdminHome>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
