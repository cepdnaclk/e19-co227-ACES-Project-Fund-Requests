import {
  Text,
  Grid,
  GridItem,
  Input,
  Box,
  Textarea,
  Checkbox,
  RadioGroup,
  Stack,
  Radio,
} from "@chakra-ui/react";
import React from "react";
import DragDrop from "./DragnDrop";

const inputBorderColor = "#97bfd4";
const gridBackgrougndColor = "#F5F5F5";
const inputFieldTextColor = "black";
const labelColor = "black";

const FormSection2 = () => {
  const [value, setValue] = React.useState("1");
  return (
    <Box paddingX={"10%"} display={"block"}>
      <Text
        color={"#00334E"}
        fontSize={"24px"}
        fontWeight={"normal"}
        paddingBottom={"60px"}
      >
        About the Project
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
            Project Title
          </Text>
        </GridItem>
        <GridItem area={"inputArea"}>
          <Input
            variant={"Outline"}
            size="md"
            borderRadius={0}
            color={inputFieldTextColor}
            marginBottom={2}
            // border={"1px solid ${#97bfd4}"}
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
            Project Description
          </Text>
        </GridItem>
        <GridItem area={"inputArea"}>
          <Textarea
            variant={"Outline"}
            borderRadius={0}
            size={"md"}
            textDecoration={"underline"}
            color={inputFieldTextColor}
            marginBottom={2}
            border={`1px solid ${inputBorderColor}`}
          ></Textarea>
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
          <Text whiteSpace={"normal"} color={labelColor}>
            What are the project goals and how they will be reached
          </Text>
        </GridItem>
        <GridItem area={"inputArea"}>
          <Textarea
            variant={"Outline"}
            borderRadius={0}
            size={"md"}
            textDecoration={"underline"}
            color={inputFieldTextColor}
            marginBottom={2}
            border={`1px solid ${inputBorderColor}`}
          ></Textarea>
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
          <Text whiteSpace={"normal"} color={labelColor}>
            What are the risks that would have an impact on the successful
            delivery of the project and what is your plan to overcome them?
          </Text>
        </GridItem>
        <GridItem area={"inputArea"}>
          <Textarea
            height={"150px"}
            variant={"Outline"}
            textDecoration={"underline"}
            size={"md"}
            borderRadius={0}
            color={inputFieldTextColor}
            marginBottom={2}
            border={`1px solid ${inputBorderColor}`}
          ></Textarea>
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
          <Text whiteSpace={"normal"} color={labelColor}>
            Project Type
          </Text>
        </GridItem>
        <GridItem area={"inputArea"}>
          <RadioGroup onChange={setValue} value={value}>
            <Stack direction="column">
              <Radio paddingY={"5px"} value="1">
                Coursework
              </Radio>
              <Radio paddingY={"5px"} value="2">
                Competition
              </Radio>
              <Radio paddingY={"5px"} value="3">
                Hobby
              </Radio>
              <Radio paddingY={"5px"} value="4">
                Other
              </Radio>
            </Stack>
          </RadioGroup>
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
          <Text whiteSpace={"normal"} color={labelColor}>
            The Expected Starting Date
          </Text>
        </GridItem>
        <GridItem area={"inputArea"}>
          <input type="date" />
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
          <Text whiteSpace={"normal"} color={labelColor}>
            When will your project be completed
          </Text>
        </GridItem>
        <GridItem area={"inputArea"}>
          <input type="date" />
        </GridItem>
      </Grid>
      <Box
        paddingX={{ base: "20px", md: "10%" }}
        paddingY={{ base: "20px", md: "2%" }}
        marginBottom={6}
        bgColor={gridBackgrougndColor}
      >
        <Text>
          How much will it cost to complete the project? Attach a detailed
          budget report (estimated cost of equipment) and clarify the
          requirements of the purchasing equipment.
        </Text>
        <Text color={"#FA3939"}>
          Note: Applications submitted without this information cannot be
          considered for funding.
        </Text>
        <Text paddingTop={4} color={"#828282"}>
          Attach the budget report in the .pdf format
        </Text>

        <DragDrop></DragDrop>
      </Box>
      <Box
        paddingX={{ base: "20px", md: "10%" }}
        paddingY={{ base: "20px", md: "2%" }}
        marginBottom={6}
        bgColor={gridBackgrougndColor}
      >
        <Checkbox spacing={5}>
          I, the Project Lead hereby confirm the above-mentioned information is
          accurate as per my understanding.
        </Checkbox>
      </Box>
    </Box>
  );
};

export default FormSection2;