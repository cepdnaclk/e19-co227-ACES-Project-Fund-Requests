import { Box, Image, Link, Text } from "@chakra-ui/react";
import denied from "../assets/images/denied.png";
import { PreviousRequest } from "../models/PreviousRequest";


const DeniedSection = () => {
  return (
    <Box paddingBottom={"60px"} textAlign={"center"} paddingX={"20%"}>
      <Text fontWeight={"semibold"} color={"#00334E"}>
        We're sorry, but you don't meet the requirements for the voucher at this
        time
      </Text>
      <Box marginTop={"30px"} justifyContent={"center"}>
        <Image
          margin={"auto"}
          src={denied}
          height={"150px"}
          width={"150px"}
        ></Image>
      </Box>
      <Text marginTop={"30px"} fontWeight={"semibold"} color={"#1B8F27"}>
        Good Luck with your Project !!
      </Text>
      <Link onClick={()=> {
        console.log("Link clicked");

        
      }} href="/" color={"#273BEE"} textDecoration={"underline"}>
        Re-Apply
      </Link>
    </Box>
  );
};

export default DeniedSection;
