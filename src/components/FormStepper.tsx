import {
  Box,
  Step,
  StepDescription,
  StepIcon,
  Stepper,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  useSteps,
  useBreakpointValue,
} from "@chakra-ui/react";

const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
];

const FormStepper = () => {
  const { activeStep, setActiveStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  const stepperOrientation = useBreakpointValue({
    base: "vertical",
    md: "horizontal",
  });

  return (
    <Box paddingX={{ base: "2%", md: "10%" }}>
      {stepperOrientation == "horizontal" ? (
        <Stepper
          size="lg"
          index={activeStep}
          orientation="horizontal"
          paddingBottom={"60px"}
        >
          {steps.map((step, index) => (
            <Step key={index} onClick={() => setActiveStep(index)}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>
      ) : (
        <Box display={"flex"} justifyContent={"center"}>
          <Stepper
            minHeight={"350px"}
            size="lg"
            index={activeStep}
            orientation="vertical"
            paddingBottom={"60px"}
          >
            {steps.map((step, index) => (
              <Step key={index} onClick={() => setActiveStep(index)}>
                <StepIndicator>
                  <StepStatus
                    complete={<StepIcon />}
                    incomplete={<StepNumber />}
                    active={<StepNumber />}
                  />
                </StepIndicator>

                <Box flexShrink="0">
                  <StepTitle>{step.title}</StepTitle>
                  <StepDescription>{step.description}</StepDescription>
                </Box>

                <StepSeparator />
              </Step>
            ))}
          </Stepper>
        </Box>
      )}
    </Box>
  );
};

export default FormStepper;
