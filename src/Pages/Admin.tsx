import React, { useState, useEffect } from 'react';
import {
  Box,
  Divider,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import Header from "../components/Header";
import FooterSection from "../components/FooterSection";
import CardComponent from "./CardComponent";
import cardImage from "../assets/images/cardImage.webp"
//import axios from "axios";

// interface RequestData {
//     Project_title: string;
//     Project_description: string;
//     starting_date: string;
//     hod_response: boolean;
//     // Add other properties as needed
//   }
  
  const Admin = () => {
    // const [latestRequests, setLatestRequests] = useState<RequestData[]>([]);
    // const [previousRequests, setPreviousRequests] = useState<RequestData[]>([]);
  
    // useEffect(() => {
    //   // Fetch the requests from your backend API
    //   axios.get("/admin/")
    //     .then((response) => {
    //       // Categorize requests based on HOD_response
    //       const latest = response.data.filter((request: RequestData) => request.hod_response === false);
    //       const previous = response.data.filter((request: RequestData) => request.hod_response === true);
  
    //       setLatestRequests(latest);
    //       setPreviousRequests(previous);
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching requests:", error);
    //     });
    // }, []);

  return (
    <>
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
            <CardComponent
                cardImage={cardImage}
                bgColor="#BFD8F8"
                title="First Card"
                description="Description for the first card."
                requestDate="2023-10-17"
            />
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
            <CardComponent
                cardImage={cardImage}
                bgColor="#CDCDCD"
                title="First Card"
                description="Description for the first card."
                requestDate="2023-10-17"
            />
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
