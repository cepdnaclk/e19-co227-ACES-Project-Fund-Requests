import { Box, Button, Grid, GridItem, Text } from "@chakra-ui/react";

import { PreviousRequest } from "../models/PreviousRequest";
import { DUserTokenInterface } from "../models/TokenMoodel";

interface Props {
  previousRequest: PreviousRequest | null;
  userToken: DUserTokenInterface | null;
}

const ReviewSection = ({ previousRequest, userToken }: Props) => {
  console.log("The previous Request: ", previousRequest);

  return (
    <Box marginBottom={"30px"} paddingX={"10%"}>
      <Text paddingY={5} color={"#033595"}>
        Your application is currently under review. You can find the current
        status of your request displayed below for your convenience.
      </Text>

      <Box paddingX={{ base: "10%", md: "20%" }}>
        <Grid
          alignContent={"center"}
          alignItems={"center"}
          padding={5}
          templateAreas={{
            base: `"who" 
                            "status"`,
            md: `"who status"`,
          }}
          gridAutoColumns={{ md: "1.6fr 0.4fr" }}
          gap={2}
        >
          <GridItem>
            <Text fontWeight={"bold"}>Approval by the Lecturer In-charge</Text>
            <Text fontSize={"14px"} color={"#757070"}>
              {previousRequest?.lecturer_name}
            </Text>
          </GridItem>
          <GridItem>
            <Button marginTop={{ base: 2, md: 0 }} colorScheme="yellow">
              Pending
            </Button>
          </GridItem>
        </Grid>
        <Grid
          alignContent={"center"}
          alignItems={"center"}
          padding={5}
          templateAreas={{
            base: `"who" 
                            "status"`,
            md: `"who status"`,
          }}
          gridAutoColumns={{ md: "1.6fr 0.4fr" }}
          gap={2}
        >
          <GridItem>
            <Text fontWeight={"bold"}>
              Approval by the Head of the Department
            </Text>
            <Text fontSize={"14px"} color={"#757070"}>
              Prof. Roshan G. Ragel
            </Text>
          </GridItem>
          <GridItem>
            <Button colorScheme="yellow">Pending</Button>
          </GridItem>
        </Grid>
        <Grid
          alignContent={"center"}
          alignItems={"center"}
          padding={5}
          templateAreas={{
            base: `"who" 
                            "status"`,
            md: `"who status"`,
          }}
          gridAutoColumns={{ md: "1.6fr 0.4fr" }}
          gap={2}
        >
          <GridItem>
            <Text fontWeight={"bold"}>Approval by the ACES</Text>
            <Text fontSize={"14px"} color={"#757070"}>
              Shanaka Fernando (President)
            </Text>
            <Text fontSize={"14px"} color={"#757070"}>
              Yashodha De Silva (Senior Treasurer)
            </Text>
            <Text fontSize={"14px"} color={"#757070"}>
              Member
            </Text>
          </GridItem>
          <GridItem>
            <Button colorScheme="yellow">Pending</Button>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default ReviewSection;
