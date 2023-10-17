// Admin Home 
// When authorities login, this is the first page they see.

import Header from "../components/Header";
import FooterSection from "../components/FooterSection";
import { Box,
        Divider,
        // Button,
        // ButtonGroup,
        // Card,
        // CardBody,
        // CardFooter,
        // Divider,
        Grid,
        GridItem,
        // Heading,
        // Icon,
        // Image,
        // Stack,
        Text
    } from "@chakra-ui/react";
//import { Link } from 'react-router-dom';
//import NextButtonAdmin from "./NextButtonAdmin";
// import { FaWave } from 'react-icons/fa';
import cardImage from "../assets/images/cardImage.webp"
// import ViewMoreButton from "./ViewMoreButton";
import CardComponent from "./CardComponent";

const Admin = () => {
    return(
        <>
            <Header></Header>
            <form className="AdminUiTexts">
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

            <Grid
                paddingX = {{base: "10%", md: "10%"}}
                paddingY = {{ base: "10px"}}

                templateAreas={{
                    base: `"card1"
                    "card2"`,
                    md: `"card1 card2"`,
                  }}
                //   gridTemplateColumns={{ md: "80% 80%" }}
                  gap={4}
                  marginBottom={0}
                  fontFamily="Poppins, sans-serif" 
                >  
                {/* {{ base: "10px", md: "1%" }} */}
                <GridItem area={"card1"} colSpan={1} alignItems="center" >
                    <CardComponent 
                    cardImage={cardImage} 
                    bgColor= '#BFD8F8' 
                    title="Titile" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" 
                    requestDate="17/10/2023"/>
                </GridItem>


                {/* <Card maxW='lg'bg={"#BFD8F8"}>
                    <CardBody >
                        <Image
                        //src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        src={cardImage}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3' >
                        <Heading size='md'>Title</Heading>
                        <Text>
                            Description
                        </Text>
                        <Text>
                            <ViewMoreButton />
                        </Text>


                        {/* <Box
                            as='button'
                            height='24px'
                            lineHeight='1.2'
                            transition='all 0.2s cubic-bezier(.08,.52,.52,1)'
                            px='8px'
                            fontSize='sm'
                            fontFamily="Poppins, sans-serif"
                            fontWeight='normal'
                            color='blue'
                            position="absolute"
                            bottom="2"
                            left="2"
                            _hover={{ color: 'grey' }}
                            _active={{
                                bg: '#dddfe2',
                                transform: 'scale(0.98)',
                            }}
                            >
                            View More
                        </Box> */}
                        {/* <Button 
                            variant='ghost' 
                            colorScheme='blue'
                            fontFamily="Poppins, sans-serif"
                            fontSize="sm" 
                            position="absolute"
                            bottom="2"
                            left="2">
                            View More
                        </Button> */}
                        {/* <Text color='blue.600' fontSize='2xl'>
                            $450
                        </Text> */}


                        {/* </Stack>
                    </CardBody>
                    {/* <Divider /> */}
                    {/* <CardFooter fontFamily="Poppins, sans-serif" >
                        {/* <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Buy now
                        </Button> */}
                        {/* <Text color="grey" position="absolute" bottom="2" right="2" fontSize="xs">
                            Request made on ~Date~
                        </Text>
                        {/* </ButtonGroup> */}
                    {/* </CardFooter>
                </Card> */} 
                

                <GridItem area={"card2"} colSpan={1} alignItems="center">
                <CardComponent 
                    cardImage={cardImage} 
                    bgColor= '#BFD8F8' 
                    title="Titile" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" 
                    requestDate="17/10/2023"/>
                </GridItem>
            </Grid>

            <Divider my={4} />
            
            <Box
            paddingTop={"4%"}
            paddingBottom={"3%"}
            // marginX={"10px"}
            // boxShadow="base"
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
                paddingX = {{base: "10%", md: "10%"}}
                paddingBottom = {{ base: "10px"}}

                templateAreas={{
                    base: `"card1"
                    "card2"`,
                    md: `"card1 card2"`,
                  }}
                  gap={4}
                  marginBottom={5}
                  fontFamily="Poppins, sans-serif"   
            >
                <GridItem area={"card1"} colSpan={1} alignItems="center" >
                <CardComponent 
                    cardImage={cardImage} 
                    bgColor= '#CDCDCD' 
                    title="Ttile" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" 
                    requestDate="17/10/2023"/>
                </GridItem>
                <GridItem area={"card2"} colSpan={1} alignItems="center">
                <CardComponent 
                    cardImage={cardImage} 
                    bgColor= '#CDCDCD' 
                    title="Ttile" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" 
                    requestDate="17/10/2023"/>
                </GridItem>
            </Grid>

            <Grid
                paddingX = {{base: "10%", md: "10%"}}
                paddingBottom = {{ base: "10px"}}

                templateAreas={{
                    base: `"card1"
                    "card2"`,
                    md: `"card1 card2"`,
                  }}
                  gap={4}
                  marginBottom={5}
                  fontFamily="Poppins, sans-serif"   
            >
                <GridItem area={"card1"} colSpan={1} alignItems="center" >
                <CardComponent 
                    cardImage={cardImage} 
                    bgColor= '#CDCDCD' 
                    title="Ttile" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" 
                    requestDate="17/10/2023"/>
                </GridItem>
                <GridItem area={"card2"} colSpan={1} alignItems="center">
                <CardComponent 
                    cardImage={cardImage} 
                    bgColor= '#CDCDCD' 
                    title="Ttile" 
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" 
                    requestDate="17/10/2023"/>
                </GridItem>
            </Grid>

                {/* <Card maxW='lg'>
                    <CardBody>
                        <Image
                        src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        />
                        <Stack mt='6' spacing='3'>
                        <Heading size='md'>Living room Sofa</Heading>
                        <Text>
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design with a
                            sprinkle of vintage design.
                        </Text>
                        {/* <Text color='blue.600' fontSize='2xl'>
                            $450
                        </Text> */}
                        {/* </Stack>
                    </CardBody> */}
                    {/* <Divider /> */}
                    {/* <CardFooter> */}
                        {/* <ButtonGroup spacing='2'>
                        <Button variant='solid' colorScheme='blue'>
                            Buy now
                        </Button> */}
                        {/* <Button variant='ghost' colorScheme='blue'>
                            Add to cart
                        </Button> */}
                        {/* </ButtonGroup> */}
                    {/* </CardFooter>
                </Card>  */}


                
            {/* Next Button */}
            {/* <Grid
                paddingX={{ base: "20px", md: "10%" }}
                paddingY={{ base: "10px", md: "1%" }}
                >
                <Link to="/admin1">
                    <NextButtonAdmin currrentStep={0} onStepperChange={function (): void {
                        throw new Error("Function not implemented.");
                    } } />
                </Link>
            </Grid> */}
            </form>
            <FooterSection></FooterSection>
        </>
    );
}
export default Admin;