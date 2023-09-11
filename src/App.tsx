import { useState } from "react";
import "./App.css";
import FormSection1 from "./components/FormSection1";
import Header from "./components/Header";
import Description from "./components/Description";
import FormStepper from "./components/FormStepper";
import { jsx } from "@emotion/react";
import { useSteps } from "@chakra-ui/react";
import { FormSection2 } from "./components/FormSection2";
import NextButton from "./components/NextButton";

let formElements = [
  <FormSection1></FormSection1>,
  <FormSection2></FormSection2>,
];

function updateFormSection(index: number) {
  console.log(formElements[index]);
  return formElements[index];
}

function App() {
  // const [count, setCount] = useState(0);

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: formElements.length,
  });

  return (
    <>
      <Header></Header>
      <Description></Description>
      {/* This is the way to create the changing stepper */}
      <FormStepper
        currentStep={activeStep}
        onStepperChange={(index) => {
          setActiveStep(index);
        }}
      ></FormStepper>
      {updateFormSection(activeStep)}
      {/* <FormSection1></FormSection1> */}
      <NextButton></NextButton>
    </>
  );
}

export default App;
