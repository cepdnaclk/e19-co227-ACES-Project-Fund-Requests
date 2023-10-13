import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentHome from "./Pages/StudentHome";
import AdminHome1 from "./Pages/AdminHome1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<StudentHome />} />
        <Route path="/admin" element={<AdminHome1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
