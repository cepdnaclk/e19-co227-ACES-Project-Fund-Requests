import { Box, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import uniLogo from "../assets/images/uni_logo.png";

const Header = () => {
  return (
    <Box
      display={"flex"}
      marginY={"auto"}
      w="100%"
      maxHeight={"205px"}
      bgGradient="linear(to-r, #0F435F, #427F9F)"
    >
      <Grid
        paddingY={"20px"}
        alignItems={"center"}
        gridTemplateColumns={{ base: "1fr 3fr", md: "150px 1fr" }}
        marginX={"50px"}
        width={{ base: "100%", md: "100%" }}
        templateAreas={{
          base: `"logo details"`,
        }}
        gap={"30px"}
      >
        <GridItem>
          <Image maxHeight={"150px"} objectFit={"cover"} src={uniLogo}></Image>
        </GridItem>
        <GridItem color={"white"}>
          <Heading fontSize={{ base: "xl", md: "4xl" }} as={"h2"}>
            PROJECT FUND REQUESTS
          </Heading>
          <Text>Department of Computer Engineering</Text>
          <Text>University of Peradeniya</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Header;
