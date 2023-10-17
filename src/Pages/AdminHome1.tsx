import FooterSection from "../components/FooterSection";
import Header from "../components/Header";
//import NextButton from "../components/NextButton";
import NextButtonAdmin from "./NextButtonAdmin";
//import { SetStateAction, useState } from "react";
import { Link } from 'react-router-dom'; 

import {
  Text,
  Grid,
  GridItem,
  //Button,
  // Textarea,
  Box,
  //Stack,

} from "@chakra-ui/react";

// const inputBorderColor = "#97bfd4";
const gridBackgrougndColor = "#F5F5F5";
// const inputFieldTextColor = "black";
const labelColor = "black";

const AdminHome1 = () => {
  // const [currentStep, setCurrentStep] = useState(1);
  // const handleStepperChange = (step: SetStateAction<number>) => {
  //   setCurrentStep(step);
  // };
  return (
    <>
      <Header></Header>
      
      <Box
      paddingTop={"7%"}
      paddingBottom={"2%"}
      // marginX={"10px"}
      // boxShadow="base"
      paddingX={"10%"}
      display={"block"}
    >
      <Text
        color={"#00334E"}
        fontSize={"20px"}
        fontWeight={"normal"}
        paddingBottom={"20px"}
      >
        Project “Secure Network Infrastructure Enhancement Project”
      </Text>
      </Box>
      
      <form>

      {/* Project Type */}
      <Grid
          paddingX={{ base: "20px", md: "10%" }}
          paddingY={{ base: "10px", md: "1%" }}
          
          templateAreas={{
            base: `"title"
            "answer"`,
            md: `"title answer"`,
          }}
          gridTemplateColumns={{ md: "30% 70%" }}
          gap={4}
          marginBottom={5}
        >
          <GridItem area={"title"} colSpan={1}>
            <Text fontWeight="bold" marginTop={2} whiteSpace={"nowrap"} color={labelColor}>
              Project Type
            </Text>
          </GridItem>
          <GridItem 
            area={"answer"}
            bg={gridBackgrougndColor}
            borderRadius={7}
            colSpan={1}
            paddingX={{ base: "20px", md: "5%" }}
            paddingY={{ base: "10px", md: "2%" }}
          >
            <Text color={labelColor}>
              Coursework
            </Text>
            <Text marginTop={2} color={labelColor}>
              CO325
            </Text>
          </GridItem>
        </Grid>

        {/* Project Description */}
        <Grid
          paddingX={{ base: "20px", md: "10%" }}
          paddingY={{ base: "10px", md: "1%" }}
          
          templateAreas={{
            base: `"title"
            "answer"`,
            md: `"title answer"`,
          }}
          gridTemplateColumns={{ md: "30% 70%" }}
          gap={4}
          marginBottom={5}
        >
          <GridItem 
            area={"title"} 
            colSpan={1}>
            <Text fontWeight="bold" marginTop={2} whiteSpace={"nowrap"} color={labelColor}>
              Project Description
            </Text>
          </GridItem>
          <GridItem 
            area={"answer"}
            bg={gridBackgrougndColor}
            borderRadius={7}
            colSpan={1}
            paddingX={{ base: "20px", md: "5%" }}
            paddingY={{ base: "10px", md: "2%" }}
          >
            <Text 
              color={labelColor}>
              The Secure Network Infrastructure Enhancement Project aims to strengthen the cybersecurity posture of our organization by upgrading and fortifying our computer network infrastructure. This project focuses on modernizing our network, enhancing security protocols, and safeguarding critical data assets.
            </Text>
          </GridItem>
        </Grid>

        {/* Project Goals and Roadmap */}
        <Grid
          paddingX={{ base: "20px", md: "10%" }}
          paddingY={{ base: "10px", md: "1%" }}
          
          templateAreas={{
            base: `"title"
            "answer"`,
            md: `"title answer"`,
          }}
          gridTemplateColumns={{ md: "30% 70%" }}
          gap={4}
          marginBottom={5}
        >
          <GridItem 
            area={"title"} 
            colSpan={1}>
            <Text fontWeight="bold" marginTop={2} whiteSpace={"nowrap"} color={labelColor}>
              Project Goals and Roadmap
            </Text>
          </GridItem>
          <GridItem 
            area={"answer"}
            bg={gridBackgrougndColor}
            borderRadius={7}
            colSpan={1}
            paddingX={{ base: "20px", md: "5%" }}
            paddingY={{ base: "10px", md: "2%" }}
          >
            <Text 
              color={labelColor}>
              The Secure Network Infrastructure Enhancement Project is focused on fortifying our organization's cybersecurity. Our goals include upgrading network hardware, implementing multi-factor authentication, conducting security awareness training, enhancing the intrusion detection system, and establishing an incident response plan. We plan to procure and install new hardware within the first quarter, integrate multi-factor authentication within six months, launch a comprehensive training program within three months, upgrade the intrusion detection system and implement real-time monitoring within five months, and finalize the incident response plan within four months.
            </Text>
          </GridItem>
        </Grid>

        {/* Project Risks and Reduction */}
        <Grid
          paddingX={{ base: "20px", md: "10%" }}
          paddingY={{ base: "10px", md: "1%" }}
          
          templateAreas={{
            base: `"title"
            "answer"`,
            md: `"title answer"`,
          }}
          gridTemplateColumns={{ md: "30% 70%" }}
          gap={4}
          marginBottom={5}
        >
          <GridItem 
            area={"title"} 
            colSpan={1}>
            <Text fontWeight="bold" marginTop={2} whiteSpace={"nowrap"} color={labelColor}>
            Project Risks and Reduction
            </Text>
          </GridItem>
          <GridItem 
            area={"answer"}
            bg={gridBackgrougndColor}
            borderRadius={7}
            colSpan={1}
            paddingX={{ base: "20px", md: "5%" }}
            paddingY={{ base: "10px", md: "2%" }}
          >
            <Text 
              color={labelColor}>
                <ul>
                  <li>Budget Constraints: Regular budget reviews and seeking additional funding if needed.</li>
                  <li>Technical Challenges: Engaging experienced IT professionals, thorough testing, and contingency plans.</li>
                  <li>Resistance to Change: Developing a change management strategy, involving employees, and providing training and support.</li>
                  <li>Cybersecurity Threats: Implementing temporary security measures and continuous monitoring.</li>
                  <li>Delays in Vendor Deliveries: Maintaining vendor communication, having backup suppliers, and adjusting timelines as necessary.</li>
                </ul>
            </Text>
          </GridItem>
        </Grid>

        {/* Starting Date */}
        <Grid
          paddingX={{ base: "20px", md: "10%" }}
          paddingY={{ base: "10px", md: "1%" }}
          
          templateAreas={{
            base: `"title"
            "answer"`,
            md: `"title answer"`,
          }}
          gridTemplateColumns={{ md: "30% 70%" }}
          gap={4}
          marginBottom={5}
        >
          <GridItem 
            area={"title"} 
            colSpan={1}>
            <Text fontWeight="bold" marginTop={2} whiteSpace={"nowrap"} color={labelColor}>
              Starting Date
            </Text>
          </GridItem>
          <GridItem 
            area={"answer"}
            bg={gridBackgrougndColor}
            borderRadius={7}
            colSpan={1}
            paddingX={{ base: "20px", md: "5%" }}
            paddingY={{ base: "10px", md: "2%" }}
          >
            <Text 
              color={labelColor}>
                Date
            </Text>
          </GridItem>
        </Grid>

        {/* Ending Date */}
        <Grid
          paddingX={{ base: "20px", md: "10%" }}
          paddingY={{ base: "10px", md: "1%" }}
          
          templateAreas={{
            base: `"title"
            "answer"`,
            md: `"title answer"`,
          }}
          gridTemplateColumns={{ md: "30% 70%" }}
          gap={4}
          marginBottom={5}
        >
          <GridItem 
            area={"title"} 
            colSpan={1}>
            <Text fontWeight="bold" marginTop={2} whiteSpace={"nowrap"} color={labelColor}>
              Ending Date
            </Text>
          </GridItem>
          <GridItem 
            area={"answer"}
            bg={gridBackgrougndColor}
            borderRadius={7}
            colSpan={1}
            paddingX={{ base: "20px", md: "5%" }}
            paddingY={{ base: "10px", md: "2%" }}
          >
            <Text 
              color={labelColor}>
                Date
            </Text>
          </GridItem>
        </Grid>

        {/* Budget Report */}
        <Grid
          paddingX={{ base: "20px", md: "10%" }}
          paddingY={{ base: "10px", md: "1%" }}
          
          templateAreas={{
            base: `"title"
            "answer"`,
            md: `"title answer"`,
          }}
          gridTemplateColumns={{ md: "30% 70%" }}
          gap={4}
          marginBottom={5}
        >
          <GridItem 
            area={"title"} 
            colSpan={1}>
            <Text fontWeight="bold" marginTop={2} whiteSpace={"nowrap"} color={labelColor}>
              Budegt Report
            </Text>
          </GridItem>
          <GridItem 
            area={"answer"}
            bg={gridBackgrougndColor}
            borderRadius={7}
            colSpan={1}
            paddingX={{ base: "20px", md: "5%" }}
            paddingY={{ base: "10px", md: "2%" }}
          >
            {/* Don't know how to add the report and make it downloadable. */}
          </GridItem>
        </Grid>

        {/* Next Button */}
        <Grid
        paddingX={{ base: "20px", md: "10%" }}
        paddingY={{ base: "10px", md: "1%" }}
        >
        <Link to="/admin2">
          <NextButtonAdmin currrentStep={0} onStepperChange={function (): void {
            throw new Error("Function not implemented.");
          } } />
        </Link>
        </Grid>

        {/* <Link to="/admin2">
          <NextButtonAdmin currrentStep={0} onStepperChange={function (index: number): void {
            throw new Error("Function not implemented.");
          } } />
        </Link> */}
        
      </form>
      <FooterSection></FooterSection>
    </>
  );
};

export default AdminHome1;
