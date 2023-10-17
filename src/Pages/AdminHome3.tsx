//import FooterSection from "../components/FooterSection";
import Header from "../components/Header";
import { Input, Button } from "@chakra-ui/react";

import {
  Text,
  Grid,
  GridItem,
  //Textarea,
  Box,

} from "@chakra-ui/react";

//const inputBorderColor = "#97bfd4";
//const gridBackgrougndColor = "#F5F5F5";
// const inputFieldTextColor = "black";
//const labelColor = "black";

const AdminHome3 = () => {
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
      className="AdminUiTexts"
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

      <Box
      //bg={gridBackgrougndColor}
      paddingX={{base: "15%" , md: "20%"}}
      className="AdminUiTexts"
      >
        <Text
          fontWeight={"bold"} >
        Do you agree to provide financial support for the project mentioned above?
        </Text>
        
        <Grid
            // paddingX={{ base: "20px", md: "10%" }}
            // paddingY={{ base: "10px", md: "1%" }}
            
            templateAreas={{
              base: `"textitem"
              "input"
              "button1"`,
              md: `"textitem"
              "input button1"`,
            }}
            gridTemplateColumns={{ md: "50% 50%" , lg: "50% 50%"  }}
            gap={2}
            marginBottom={5}
            >
        <GridItem area={"textitem"}>
          <Text
            fontSize={"smaller"}
            margin={{ base: "5% 0% 0%", md: "3% 0% 0%"}}
            color={"#757070"}
          >
          Provide your decision by typing Yes / No
          </Text>
        </GridItem>
        <GridItem area={"input"}>
        <Input
          margin={{ base: "0% 0% 1%", md: "0% 0% 3%"}}
          width={{ base: "80%", md:"85%", lg: "90%"}}
          variant="outline" 
          borderColor="black" 
          placeholder="Yes / No" 
        />
        </GridItem>
        <GridItem area={"button1"}>
        <Button 
          marginTop={"1%"}
          colorScheme='green' 
          variant='outline'
          paddingX={"5%"} 
          paddingY={"3%"}
          borderRadius={"20px"}
          size={"xs"}
          >
          GO
        </Button>
      </GridItem>
        </Grid>
      </Box>

      {/* Approval states */}
    </>
  );
};

export default AdminHome3; 