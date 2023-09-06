import { useState } from "react";
import "./App.css";
import FormSection1 from "./components/FormSection1";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <FormSection1></FormSection1>
    </>
  );
}

export default App;
