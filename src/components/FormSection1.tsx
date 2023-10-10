import {
  Text,
  Grid,
  GridItem,
  Input,
  Box,
  FormControl,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import FundRequest from "../classes/fund_request";

const inputBorderColor = "#97bfd4";
const gridBackgrougndColor = "#F5F5F5";
const inputFieldTextColor = "black";
const labelColor = "black";

interface Props {
  onSetRequestObject: (requestobj: FundRequest) => void;
  requestObject: FundRequest | null;
  submitStatus: boolean;
  onSubmit: (status: boolean) => void;
}

const schema = z.object({
  name: z.string().min(3, {
    message: "The name should be atleast 3 characters long!",
  }),
  regname: z.string().min(3, {
    message: "The name should be atleast 3 characters long!",
  }),

  email: z.string().email({ message: "Please enter a valid email address" }),
  contactNo: z.string().min(10, {
    message: "The contact number should be 10 characters long",
  }),
});

type formData = z.infer<typeof schema>;

const FormSection1 = ({
  submitStatus,
  onSubmit,
  requestObject,
  onSetRequestObject,
}: Props) => {
  const [formSentStatus, setFormSentStatus] = useState(0);
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<formData>({
    resolver: zodResolver(schema),
  });

  return (
    <Box
      paddingTop={"5%"}
      paddingBottom={"2%"}
      // marginX={"10px"}
      // boxShadow="base"
      paddingX={"10%"}
      display={"block"}
    >
      <Text
        color={"#00334E"}
        fontSize={"24px"}
        fontWeight={"normal"}
        paddingBottom={"60px"}
      >
        Contact Information
      </Text>

      <form
        onSubmit={handleSubmit((data) => {
          if (!isValid) {
            return;
          }

          if (requestObject == null) {
            var newRequestObject = new FundRequest();

            newRequestObject = {
              ...newRequestObject,
              ApplicantsNames: {
                ...newRequestObject.ApplicantsNames,
                member1: data.name,
              },
              leadersName: data.regname,
              email: data.email,
              contactNo: data.contactNo,
            };
          }

          // Sending data 1 to backend

          // axios
          //   .post("http://localhost:5000/contactDetails", data)
          //   .then((res) => {
          //     setFormSentStatus(Number(res.status));
          //     console.log("REady to display the toast");

          //     if (res.status == 200) {
          //       toast({
          //         title: "Contact Information",
          //         description:
          //           "You've successfully submitted contact information",
          //         status: "success",
          //         duration: 3000,
          //         isClosable: true,
          //         position: "top",
          //       });
          //     }
          //     onSubmit(res.status == 200);
          //     console.log(res.status);
          //   })
          //   .catch((err) => {
          //     console.log(err);
          //   });
          console.log(data);
        })}
        action="POST"
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
            <Text marginTop={2} whiteSpace={"nowrap"} color={labelColor}>
              Full names of the Applicants
            </Text>
          </GridItem>
          <GridItem area={"inputArea"}>
            <Input
              {...register("name")}
              className="form-control"
              variant={"Outline"}
              size="sm"
              borderRadius={0}
              color={inputFieldTextColor}
              marginTop={2}
              // border={"1px solid ${#97bfd4}"}
              border={
                errors.name ? `1px solid red` : `1px solid ${inputBorderColor}`
              }
            ></Input>
            {errors.name && (
              <Text fontSize="xs" color="red">
                {errors.name.message}
              </Text>
            )}

            <Input
              size="sm"
              variant={"Outline"}
              borderRadius={0}
              color={inputFieldTextColor}
              marginTop={2}
              border={`1px solid ${inputBorderColor}`}
            ></Input>

            <Input
              size="sm"
              variant={"Outline"}
              borderRadius={0}
              color={inputFieldTextColor}
              marginTop={2}
              border={`1px solid ${inputBorderColor}`}
            ></Input>
            <Input
              size="sm"
              variant={"Outline"}
              borderRadius={0}
              color={inputFieldTextColor}
              marginTop={2}
              border={`1px solid ${inputBorderColor}`}
            ></Input>
            <Input
              size="sm"
              variant={"Outline"}
              borderRadius={0}
              border={`1px solid ${inputBorderColor}`}
              color={inputFieldTextColor}
              marginTop={2}
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
            <Text marginTop={2} whiteSpace={"nowrap"} color={labelColor}>
              Lead's Name
            </Text>
          </GridItem>
          <GridItem area={"inputArea"}>
            <Input
              {...register("regname")}
              variant={"Outline"}
              borderRadius={0}
              size={"sm"}
              color={inputFieldTextColor}
              marginTop={2}
              border={
                errors.regname
                  ? `1px solid red`
                  : `1px solid ${inputBorderColor}`
              }
            ></Input>
            {errors.regname && (
              <Text fontSize="xs" color="red">
                {errors.regname.message}
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
            <Text marginTop={2} whiteSpace={"nowrap"} color={labelColor}>
              Email Address
            </Text>
          </GridItem>
          <GridItem area={"inputArea"}>
            <Input
              {...register("email")}
              variant={"Outline"}
              borderRadius={0}
              size={"sm"}
              color={inputFieldTextColor}
              marginTop={2}
              border={
                errors.email ? `1px solid red` : `1px solid ${inputBorderColor}`
              }
            ></Input>
            {errors.email && (
              <Text fontSize="xs" color="red">
                {errors.email.message}
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
            <Text marginTop={2} whiteSpace={"nowrap"} color={labelColor}>
              Contact Number
            </Text>
          </GridItem>
          <GridItem area={"inputArea"}>
            <Input
              {...register("contactNo")}
              placeholder="0xx-xxxxxxx"
              variant={"Outline"}
              size={"sm"}
              borderRadius={0}
              color={inputFieldTextColor}
              marginTop={2}
              border={
                errors.contactNo
                  ? `1px solid red`
                  : `1px solid ${inputBorderColor}`
              }
            ></Input>
            {errors.contactNo && (
              <Text fontSize="xs" color="red">
                {errors.contactNo.message}
              </Text>
            )}
          </GridItem>
        </Grid>
        <button
          onClick={() => {
            // event?.preventDefault();

            // onSubmit(isValid);
            // eep track below
            // onSubmit(formSentStatus == 200);

            // if (formSentStatus == 200) {
            //   toast({
            //     title: "Contact Information",
            //     description:
            //       "You've successfully submitted contact information",
            //     status: "success",
            //     duration: 3000,
            //     isClosable: true,
            //     position: "top",
            //   });
            // }

            console.log(!submitStatus);
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

export default FormSection1;
