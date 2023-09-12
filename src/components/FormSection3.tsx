import { Text, Grid, GridItem, Input, Box } from "@chakra-ui/react";
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
            Information about the Lecture In-charge
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
        </GridItem>
      </Grid>
    </Box>
  );
};

export default FormSection3;
