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
import { useToast } from "@chakra-ui/react";

import React from "react";
import DragDrop from "./DragnDrop";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";

const ACCEPTED_FILE_TYPES = ["application/pdf"];
const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

interface Props {
  onSubmit: (status: boolean) => void;
}

const schema = z.object({
  title: z.string().trim().min(3, {
    message: "The title should be atleast 3 characters long!",
  }),
  description: z.string().trim().min(10, {
    message: "The description should be atleast 10 characters long!",
  }),
  goals: z.string().trim().min(10, {
    message: "This explanation should be atleast 10 characters long!",
  }),
  risks: z.string().trim().min(10, {
    message: "This explanation should be atleast 10 characters long!",
  }),

  type: z.string({ invalid_type_error: "Please select a project type!" }),

  startingDate: z.string().min(1, { message: "Please select a starting date" }),
  endingDate: z.string().min(1, { message: "Please select an ending date" }),

  // pdfFile: z
  //   .object({
  //     name: z.string(),
  //     type: z.string(),

  //     size: z.number(),
  //   })
  //   .refine(
  //     (file) => {
  //       console.log(file.name);
  //       console.log(file.type);
  //       console.log(file.size);

  //       return ACCEPTED_FILE_TYPES.includes(file.type);
  //     },
  //     { message: "Only PDF files are accepted" }
  //   )
  //   .refine(
  //     (file) => {
  //       console.log(file.name);
  //       console.log(file.type);
  //       console.log(file.size);

  //       return file.size <= MAX_FILE_SIZE;
  //     },
  //     { message: "Max file size is 50MB" }
  //   ),

  // Adding catchall to accommodate other form fields

  isChecked: z.boolean().refine((value) => value === true, {
    message: "Please check the checkbox.",
  }),
});
// .catchall(z.string().optional());

type formData = z.infer<typeof schema>;

const inputBorderColor = "#97bfd4";
const gridBackgrougndColor = "#F5F5F5";
const inputFieldTextColor = "black";
const labelColor = "black";

const FormSection2 = ({ onSubmit }: Props) => {
  const [value, setValue] = React.useState("1");
  const toast = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  return (
    <Box marginBottom="10px" paddingX={"10%"} display={"block"}>
      <Text
        color={"#00334E"}
        fontSize={"24px"}
        fontWeight={"normal"}
        paddingBottom={"60px"}
      >
        About the Project
      </Text>
      <form
        onSubmit={handleSubmit((data) => {
          if (!isValid) {
            return;
          }

          axios
            .post("http://localhost:5000/aboutProject", data)
            .then((res) => {
              if (res.status == 200) {
                toast({
                  title: "About the Project",
                  description:
                    "You've successfully submitted the details about the project",
                  status: "success",
                  duration: 3000,
                  isClosable: true,
                  position: "top",
                });
              }

              onSubmit(res.status == 200);
              console.log(res.status);
            })
            .catch((err) => {
              console.log(err);
            });
          console.log(data);
        })}
        action=""
      >
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
              {...register("title")}
              variant={"Outline"}
              size="md"
              borderRadius={0}
              color={inputFieldTextColor}
              marginBottom={2}
              // border={"1px solid ${#97bfd4}"}
              border={
                errors.title ? `1px solid red` : `1px solid ${inputBorderColor}`
              }
            ></Input>
            {errors.title && (
              <Text fontSize="xs" color="red">
                {errors.title.message}
              </Text>
            )}
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
              {...register("description")}
              variant={"Outline"}
              borderRadius={0}
              size={"md"}
              textDecoration={"underline"}
              color={inputFieldTextColor}
              marginBottom={2}
              border={
                errors.description
                  ? `1px solid red`
                  : `1px solid ${inputBorderColor}`
              }
            ></Textarea>
            {errors.description && (
              <Text fontSize="xs" color="red">
                {errors.description.message}
              </Text>
            )}
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
              {...register("goals")}
              variant={"Outline"}
              borderRadius={0}
              size={"md"}
              textDecoration={"underline"}
              color={inputFieldTextColor}
              marginBottom={2}
              border={
                errors.goals ? `1px solid red` : `1px solid ${inputBorderColor}`
              }
            ></Textarea>
            {errors.goals && (
              <Text fontSize="xs" color="red">
                {errors.goals.message}
              </Text>
            )}
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
              {...register("risks")}
              height={"150px"}
              variant={"Outline"}
              textDecoration={"underline"}
              size={"md"}
              borderRadius={0}
              color={inputFieldTextColor}
              marginBottom={2}
              border={
                errors.risks ? `1px solid red` : `1px solid ${inputBorderColor}`
              }
            ></Textarea>
            {errors.risks && (
              <Text fontSize="xs" color="red">
                {errors.risks.message}
              </Text>
            )}
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
            <RadioGroup {...register("type")} onChange={setValue} value={value}>
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
            {errors.type && (
              <Text fontSize="xs" color="red">
                {errors.type.message}
              </Text>
            )}
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
            <input {...register("startingDate")} type="date" />
            {errors.startingDate && (
              <Text fontSize="xs" color="red">
                {errors.startingDate.message}
              </Text>
            )}
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
            <input {...register("endingDate")} type="date" />
            {errors.endingDate && (
              <Text fontSize="xs" color="red">
                {errors.endingDate.message}
              </Text>
            )}
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

          {/* <DragDrop></DragDrop> */}
          {/* <input
            // {...register("pdfFile")}
            type="file"
            id="fileInput"
            accept="application/pdf"
          /> */}

          {/* {errors.pdfFile && (
            <Text fontSize="xs" color="red">
              {errors.pdfFile.message}
            </Text>
          )} */}
        </Box>
        <Box
          paddingX={{ base: "20px", md: "10%" }}
          paddingY={{ base: "20px", md: "2%" }}
          marginBottom={6}
          bgColor={gridBackgrougndColor}
        >
          <Checkbox {...register("isChecked")} spacing={5}>
            I, the Project Lead hereby confirm the above-mentioned information
            is accurate as per my understanding.
          </Checkbox>
          {errors.isChecked && (
            <Text fontSize="xs" color="red">
              {errors.isChecked.message}
            </Text>
          )}
        </Box>

        <button
          onClick={() => {
            // event?.preventDefault();

            // onSubmit(isValid);
            // if (isValid) {
            //   // toast({
            //   //   title: "About the Project",
            //   //   description:
            //   //     "You've successfully submitted the details about the project",
            //   //   status: "success",
            //   //   duration: 3000,
            //   //   isClosable: true,
            //   //   position: "top"
            //   // });
            // }
            console.log("is valid: " + isValid);
          }}
          className="submit-btn"
          type="submit"
        >
          Submit
        </button>
      </form>
    </Box>
  );
};

export default FormSection2;
