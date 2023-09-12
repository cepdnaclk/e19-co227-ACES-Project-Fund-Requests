import { Button } from "@chakra-ui/react";

interface Props {
  currrentStep: number;
  onStepperChange: (index: number) => void;
}

const NextButton = ({ onStepperChange, currrentStep }: Props) => {
  return (
    <>
      <Button
        _hover={{ bgColor: "#5588A3" }}
        onClick={() => {
          if (currrentStep < 4) {
            currrentStep += 1;
          }

          onStepperChange(currrentStep);
          window.scrollTo({ top: 500 });
        }}
        style={{
          fontFamily: "'Outfit', sans-serif", // Use the custom font
        }}
        marginLeft={"10%"}
        marginBottom={{ base: "5%", md: "2%" }}
        letterSpacing={"5px"}
        borderRadius={"30px"}
        width={"149px"}
        height={"49px"}
        bgGradient={"linear(to-b  , #5588A3, #092636)"}
        color={"white"}
        fontWeight={"700"}
        fontSize={"18"}
      >
        {currrentStep == 2 ? "SUBMIT" : "NEXT"}
      </Button>
    </>
  );
};

export default NextButton;
