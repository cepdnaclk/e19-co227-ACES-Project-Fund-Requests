import { Box, Image, Link, Text } from "@chakra-ui/react";
import success from "../assets/images/successR.png";

const QualifiedSection = () => {
  return (
    <Box paddingBottom={"60px"} textAlign={"center"} paddingX={"20%"}>
      <Text fontWeight={"semibold"} color={"#00334E"}>
        Great news! You're now qualified to receive the project funding voucher
      </Text>
      <Box marginTop={"30px"} justifyContent={"center"}>
        <Image
          margin={"auto"}
          src={success}
          height={"150px"}
          width={"150px"}
        ></Image>
      </Box>
      <Text marginTop={"30px"} fontWeight={"semibold"} color={"#1B8F27"}>
        Good Luck with your Project !!
      </Text>
      <Link color={"#273BEE"} textDecoration={"underline"}>
        Go to Voucher
      </Link>
    </Box>
  );
};

export default QualifiedSection;
