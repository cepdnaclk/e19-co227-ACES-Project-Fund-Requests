import { Text, Grid, GridItem, Input, Box, Button } from "@chakra-ui/react";
const inputBorderColor = "#97bfd4";
const gridBackgrougndColor = "#F5F5F5";
const inputFieldTextColor = "black";
const labelColor = "black";

const FormSection3 = () => {
  return (
    <Box paddingX={"10%"} display={"block"}>
      <Text
        color={"#00334E"}
        fontSize={"24px"}
        fontWeight={"normal"}
        paddingBottom={"60px"}
      >
        Approval of the Project
      </Text>
      <Box
        paddingX={{ base: "20px", md: "10%" }}
        paddingY={{ base: "20px", md: "2%" }}
        bg={gridBackgrougndColor}
        marginBottom={5}
      >
        <Text paddingBottom={"25px"} whiteSpace={"normal"} color={labelColor}>
          Information about the Lecture In-charge
        </Text>

        <Grid
          alignContent={"center"}
          alignItems={"center"}
          paddingX={{ base: "20px", md: "10%" }}
          paddingY={{ base: "20px", md: "2%" }}
          bg={gridBackgrougndColor}
          templateAreas={{
            base: `"title"
            "inputArea"`,

            md: `"title inputArea"`,
          }}
          gridTemplateColumns={{ md: "0.6fr 1.4fr" }}
          gap={3}
          marginBottom={5}
        >
          <GridItem
            alignContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            area={"title"}
          >
            <Text whiteSpace={"nowrap"} color={labelColor}>
              Name
            </Text>
          </GridItem>
          <GridItem
            alignContent={"center"}
            alignItems={"center"}
            area={"inputArea"}
          >
            <Input
              variant={"Outline"}
              size="md"
              borderRadius={0}
              color={inputFieldTextColor}
              // border={"1px solid ${#97bfd4}"}
              border={`1px solid ${inputBorderColor}`}
            ></Input>
          </GridItem>
        </Grid>
        <Grid
          alignContent={"center"}
          alignItems={"center"}
          paddingX={{ base: "20px", md: "10%" }}
          paddingY={{ base: "20px", md: "2%" }}
          bg={gridBackgrougndColor}
          templateAreas={{
            base: `"title"
            "inputArea"`,

            md: `"title inputArea"`,
          }}
          gridTemplateColumns={{ md: "0.6fr 1.4fr" }}
          gap={3}
          marginBottom={5}
        >
          <GridItem
            alignContent={"center"}
            alignItems={"center"}
            textAlign={"center"}
            area={"title"}
          >
            <Text whiteSpace={"nowrap"} color={labelColor}>
              Email
            </Text>
          </GridItem>
          <GridItem area={"inputArea"}>
            <Input
              variant={"Outline"}
              size="md"
              borderRadius={0}
              color={inputFieldTextColor}
              // border={"1px solid ${#97bfd4}"}
              border={`1px solid ${inputBorderColor}`}
            ></Input>
          </GridItem>
        </Grid>
        <Box textAlign={"end"}>
          <Button
            bgColor={"#FEFAFA"}
            boxShadow={"lg"}
            style={{
              fontFamily: "'Outfit', sans-serif", // Use the custom font
            }}
            fontWeight={"thin"}
            _hover={{ bgColor: "black", color: "white" }}
            border={"1px solid black"}
            height={"45px"}
            width={"135px"}
            borderRadius={"30px"}
          >
            SUBMIT
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default FormSection3;
