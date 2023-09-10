import { Box, Heading, Text } from "@chakra-ui/react";

const Description = () => {
  return (
    <Box justifyContent={"center"} paddingY={"60px"}>
      <Heading
        paddingBottom={"30px"}
        textAlign={"center"}
        as={"h5"}
        fontSize={"30px"}
        fontWeight={"semibold"}
        fontFamily={"Noto Sans"}
        color={"#00334E"}
      >
        ACES Project Fund
      </Heading>
      <Box
        borderRadius={"15px"}
        paddingX={"5%"}
        paddingY={"3%"}
        marginX={"20%"}
        backgroundColor={"#E6F0F6"}
      >
        <Text>
          The project fund is set up by ACES with the help of donations from
          ACES Alumni. It is managed by a committee appointed by ACES and the
          members are ACES executives and the Head of the Department.
        </Text>
      </Box>
    </Box>
  );
};

export default Description;
