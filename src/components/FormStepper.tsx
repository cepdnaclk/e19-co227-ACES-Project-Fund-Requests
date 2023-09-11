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

interface Props {
  currentStep: number;
  onStepperChange: (index: number) => void;
}

const steps = [
  { title: "Contact", description: "Contact Information" },
  { title: "Project", description: "About the Project" },
  { title: "Approval", description: "Approval of the Project" },
  { title: "Provision", description: "Provision of Funds" },
];

const FormStepper = ({ currentStep, onStepperChange }: Props) => {
  const stepperOrientation = useBreakpointValue({
    base: "vertical",
    md: "horizontal",
  });

  return (
    <Box paddingX={{ base: "2%", md: "10%" }}>
      {stepperOrientation == "horizontal" ? (
        <Stepper
          size="md"
          index={currentStep}
          orientation="horizontal"
          paddingBottom={"60px"}
        >
          {steps.map((step, index) => (
            <Step key={index} onClick={() => onStepperChange(index)}>
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
            index={currentStep}
            orientation="vertical"
            paddingBottom={"60px"}
          >
            {steps.map((step, index) => (
              <Step key={index} onClick={() => onStepperChange(index)}>
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
