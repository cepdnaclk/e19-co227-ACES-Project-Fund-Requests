import { Text, Grid, GridItem, Input } from "@chakra-ui/react";

const FormSection1 = () => {
  return (
    <Grid
      alignContent={"center"}
      w={{ base: "70%", lg: "50%" }}
      padding={{ base: "20px" }}
      bg={"#F5F5F5"}
      templateAreas={{
        base: `"title"
            "inputArea"`,

        md: `"title inputArea"`,
      }}
      gridTemplateRows={"1fr 1fr"}
      gridTemplateColumns={"1fr 1fr"}
      h="100px"
      gap={2}
      color={"#ffff"}
    >
      <GridItem area={"title"}>
        <Text whiteSpace={"nowrap"} color={"black"}>
          Enter your full name
        </Text>
      </GridItem>
      <GridItem area={"inputArea"}>
        <Input variant={"filled"}></Input>
      </GridItem>
    </Grid>
  );
};

export default FormSection1;
