import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppCopy from "./Pages/StudentHome";
import AdminHome from "./Pages/AdminHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AppCopy />} />
        <Route path="/admin" element={<AdminHome></AdminHome>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
