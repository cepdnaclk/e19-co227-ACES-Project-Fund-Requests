import React, { useState, useEffect } from "react";
import {
  Box,
  Divider,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

import jwt_decode from "jwt-decode";

import Header from "../components/Header";
import FooterSection from "../components/FooterSection";
import CardComponent from "./CardComponent";
import cardImage from "../assets/images/cardImage.webp";
import axios from "axios";
import { PreviousRequest } from "../models/PreviousRequest";
import { DUserTokenInterface } from "../models/TokenMoodel";
import { GoogleLogin } from "@react-oauth/google";
//import axios from "axios";

// interface RequestData {
//     Project_title: string;
//     Project_description: string;
//     starting_date: string;
//     hod_response: boolean;
//     // Add other properties as needed
//   }

const Admin = () => {
  const [allRequests, setAllReusts] = useState<PreviousRequest[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userToken, setUserToken] = useState<DUserTokenInterface | null>(null);

  // const [latestRequests, setLatestRequests] = useState<RequestData[]>([]);
  // const [previousRequests, setPreviousRequests] = useState<RequestData[]>([]);

  useEffect(() => {
    if (userToken == null) {
      onOpen();
    } else {
      onClose();
      console.log("Closed the modal");

      setIsLoading(true);

      axios
        .get("http://localhost:5000/getall")
        .then((response) => {
          console.log(response.data.docs[0]);

          setAllReusts(response.data.docs);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching requests:", error);
          setIsLoading(false);
        });
    }
  }, [userToken]);

  // useEffect(() => {
  //   // Fetch the requests from your backend API
  //   setIsLoading(true);
  //   console.log("Start sending");

  //   // axios
  //   //   .get("http://localhost:5000/getall")
  //   //   .then((response) => {
  //   //     console.log(response.data.docs[0]);

  //   //     setAllReusts(response.data.docs);
  //   //     setIsLoading(false);
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error("Error fetching requests:", error);
  //   //     setIsLoading(false);
  //   //   });
  // }, []);

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size="sm"
        isCentered
      >
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(3px) " />
        <ModalContent>
          <ModalHeader
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            ACES Project Fund Requests
          </ModalHeader>
          <ModalBody
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Text pb="3" fontSize="sm">
              You need to login with your eng email
            </Text>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);

                var decodedUserToken: DUserTokenInterface = jwt_decode(
                  credentialResponse.credential!
                );

                setUserToken(decodedUserToken);

                console.log(decodedUserToken);

                onClose();
              }}
              onError={() => {
                onOpen();
                console.log("Login Failed");
              }}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
      <Header />
      <form className="AdminUiTexts">
        <Box
          paddingTop={"7%"}
          paddingBottom={"2%"}
          paddingX={"10%"}
          display={"block"}
        >
          <Text
            color={"#00334E"}
            fontSize={"30px"}
            fontWeight={"bold"}
            paddingBottom={"4px"}
            fontFamily={"Poppins, sans-serif"}
          >
            Welcome To Project Fund Requests👋
          </Text>
          <Divider my={10} />
          <Text
            color={"#00334E"}
            fontSize={"20px"}
            fontWeight={"small"}
            paddingBottom={"10px"}
            fontFamily={"Poppins, sans-serif"}
          >
            Latest Requests
          </Text>
        </Box>

        {/* <Grid
          paddingX={{ base: "10%", md: "10%" }}
          paddingY={{ base: "10px" }}
          templateAreas={{
            base: `"card1" "card2"`,
            md: `"card1 card2"`,
          }}
          gap={4}
          marginBottom={0}
          fontFamily="Poppins, sans-serif"
        >
          {latestRequests.map((request, index) => (
            <GridItem area={`card${index + 1}`} colSpan={1} alignItems="center" key={index}>
              <CardComponent
                cardImage={cardImage}
                bgColor="#BFD8F8"
                title={request.Project_title}
                description={request.Project_description}
                requestDate={request.starting_date}
              />
            </GridItem>
          ))}
        </Grid> */}

        <Grid
          paddingX={{ base: "10%", md: "10%" }}
          paddingBottom={{ base: "10px" }}
          templateAreas={{
            base: `"card1" "card2"`,
            md: `"card1 card2"`,
          }}
          gap={4}
          marginBottom={5}
          fontFamily="Poppins, sans-serif"
        >
          <GridItem area={`card1`} colSpan={1} alignItems="center">
            {isLoading ? (
              <Stack>
                <SkeletonText></SkeletonText>
                <SkeletonText></SkeletonText>
              </Stack>
            ) : (
              allRequests.map((eachRequest) => {
                return (
                  <CardComponent
                    key={eachRequest._id}
                    cardImage={cardImage}
                    bgColor="#BFD8F8"
                    title={eachRequest.project_title}
                    description={eachRequest.project_description}
                    requestDate="2023-10-18"
                  />
                );
              })
            )}
            {/* <CardComponent
              cardImage={cardImage}
              bgColor="#BFD8F8"
              title="Automated Inventory Management..."
              description="The project aims to upgrade the existing manual inventory management system of a small retail business to an automated system. This upgrade is crucial..."
              requestDate="2023-10-18"
            /> */}
          </GridItem>
          {/* <GridItem area={`card2`} colSpan={1} alignItems="center">
            <CardComponent
                cardImage={cardImage}
                bgColor="#BFD8F8"
                title="First Card"
                description="Description for the first card."
                requestDate="2023-10-17"
            />
            </GridItem> */}
        </Grid>
        <Divider my={4} />
        <Box
          paddingTop={"4%"}
          paddingBottom={"3%"}
          paddingX={"10%"}
          display={"block"}
        >
          <Text
            color={"#00334E"}
            fontSize={"20px"}
            fontWeight={"small"}
            paddingBottom={"10px"}
            fontFamily={"Poppins, sans-serif"}
          >
            Older Requests
          </Text>
        </Box>

        <Grid
          paddingX={{ base: "10%", md: "10%" }}
          paddingBottom={{ base: "10px" }}
          templateAreas={{
            base: `"card1" "card2"`,
            md: `"card1 card2"`,
          }}
          gap={4}
          marginBottom={5}
          fontFamily="Poppins, sans-serif"
        >
          <GridItem area={`card1`} colSpan={1} alignItems="center">
            {/* <CardComponent
              cardImage={cardImage}
              bgColor="#CDCDCD"
              title="First Card"
              description="Description for the first card."
              requestDate="2023-10-17"
            /> */}
          </GridItem>
          <GridItem area={`card2`} colSpan={1} alignItems="center">
            <CardComponent
              cardImage={cardImage}
              bgColor="#CDCDCD"
              title="First Card"
              description="Description for the first card."
              requestDate="2023-10-17"
            />
          </GridItem>
        </Grid>

        {/* {previousRequests.map((request, index) => (
            <GridItem area={`card${index + 1}`} colSpan={1} alignItems="center" key={index}>
              <CardComponent
                cardImage={cardImage}
                bgColor="#CDCDCD"
                title={request.Project_title}
                description={request.Project_description}
                requestDate={request.starting_date}
              />
            </GridItem>
          ))} */}
      </form>
      <FooterSection />
    </>
  );
};

export default Admin;
