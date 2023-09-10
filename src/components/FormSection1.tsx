import { Text, Grid, GridItem, Input, Box } from "@chakra-ui/react";
const inputBorderColor = "#97bfd4";
const gridBackgrougndColor = "#F5F5F5";
const inputFieldTextColor = "black";
const labelColor = "black";

const FormSection1 = () => {
  return (
    <Box paddingX={"10%"} display={"block"}>
      <Text
        lineHeight={"40.86px"}
        paddingBottom={"50px"}
        textAlign={"center"}
        fontSize={"30px"}
        fontWeight={"600"}
        color={"#021F2F"}
      >
        Application Form
      </Text>
      <Grid
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
        <GridItem area={"title"}>
          <Text whiteSpace={"nowrap"} color={labelColor}>
            Full names of the Applicants
          </Text>
        </GridItem>
        <GridItem area={"inputArea"}>
          <Input
            variant={"Outline"}
            size="sm"
            borderRadius={0}
            color={inputFieldTextColor}
            marginBottom={2}
            // border={"1px solid ${#97bfd4}"}
            border={`1px solid ${inputBorderColor}`}
          ></Input>
          <Input
            size="sm"
            variant={"Outline"}
            borderRadius={0}
            textDecoration={"underline"}
            color={inputFieldTextColor}
            marginBottom={2}
            border={`1px solid ${inputBorderColor}`}
          ></Input>
          <Input
            size="sm"
            variant={"Outline"}
            borderRadius={0}
            textDecoration={"underline"}
            color={inputFieldTextColor}
            marginBottom={2}
            border={`1px solid ${inputBorderColor}`}
          ></Input>
          <Input
            size="sm"
            variant={"Outline"}
            borderRadius={0}
            textDecoration={"underline"}
            color={inputFieldTextColor}
            marginBottom={2}
            border={`1px solid ${inputBorderColor}`}
          ></Input>
          <Input
            size="sm"
            variant={"Outline"}
            borderRadius={0}
            textDecoration={"underline"}
            border={`1px solid ${inputBorderColor}`}
            color={inputFieldTextColor}
            marginBottom={2}
          ></Input>
        </GridItem>
      </Grid>
      <Grid
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
        <GridItem area={"title"}>
          <Text whiteSpace={"nowrap"} color={labelColor}>
            Lead's Name
          </Text>
        </GridItem>
        <GridItem area={"inputArea"}>
          <Input
            variant={"Outline"}
            borderRadius={0}
            size={"sm"}
            textDecoration={"underline"}
            color={inputFieldTextColor}
            marginBottom={2}
            border={`1px solid ${inputBorderColor}`}
          ></Input>
        </GridItem>
      </Grid>
      <Grid
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
        <GridItem area={"title"}>
          <Text whiteSpace={"nowrap"} color={labelColor}>
            Email Address
          </Text>
        </GridItem>
        <GridItem area={"inputArea"}>
          <Input
            variant={"Outline"}
            borderRadius={0}
            size={"sm"}
            textDecoration={"underline"}
            color={inputFieldTextColor}
            marginBottom={2}
            border={`1px solid ${inputBorderColor}`}
          ></Input>
        </GridItem>
      </Grid>
      <Grid
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
        <GridItem area={"title"}>
          <Text whiteSpace={"nowrap"} color={labelColor}>
            Contact Number
          </Text>
        </GridItem>
        <GridItem area={"inputArea"}>
          <Input
            variant={"Outline"}
            textDecoration={"underline"}
            size={"sm"}
            borderRadius={0}
            color={inputFieldTextColor}
            marginBottom={2}
            border={`1px solid ${inputBorderColor}`}
          ></Input>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default FormSection1;
