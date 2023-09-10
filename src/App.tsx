import { useState } from "react";
import "./App.css";
import FormSection1 from "./components/FormSection1";
import Header from "./components/Header";
import Description from "./components/Description";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Description></Description>
      <FormSection1></FormSection1>
    </>
  );
}

export default App;
