import { Button } from "@chakra-ui/react";

const NextButton = () => {
  return (
    <>
      <Button
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
        NEXT
      </Button>
    </>
  );
};

export default NextButton;
