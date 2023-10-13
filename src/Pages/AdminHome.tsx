import FooterSection from "../components/FooterSection";
import Header from "../components/Header";
import {
  Text,
  Grid,
  GridItem,
  Input,
  Box,

} from "@chakra-ui/react";

const AdminHome = () => {
  return (
    <>
      <Header></Header>
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
        fontSize={"20px"}
        fontWeight={"normal"}
        paddingBottom={"60px"}
      >
        Project “Secure Network Infrastructure Enhancement Project”
      </Text>
      </Box>
      <FooterSection></FooterSection>
    </>
  );
};

export default AdminHome;
