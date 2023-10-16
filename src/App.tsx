import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentHome from "./Pages/StudentHome";
import AdminHome1 from "./Pages/AdminHome1";
import AdminHome2 from "./Pages/AdminHome2";
import AdminHome3 from "./Pages/AdminHome3";
// //import AdminHome3


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<StudentHome />} />
        <Route path="/admin1" element={<AdminHome1 />} />
        <Route path="/admin2" element={<AdminHome2 />} />
        <Route path="/admin3" element={<AdminHome3 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
