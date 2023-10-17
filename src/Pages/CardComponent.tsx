import React from 'react';
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text } from "@chakra-ui/react";  
import ViewMoreButton from './ViewMoreButton';
//import cardImage from "../assets/images/cardImage.webp"

interface CardComponentProps {
  cardImage: string;
  bgColor: string;
  title: string; // Add title prop
  description: string; // Add description prop
  requestDate: string; // Add requestDate prop
}

const CardComponent: React.FC<CardComponentProps> = ({ cardImage, bgColor, title, description, requestDate }) => {
  return (
    
      <Card maxW='lg' bg={bgColor} marginBottom={"5%"} _hover={{ boxShadow: 'xl' }}>
        <CardBody>
          <Image
            src={cardImage}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{title}</Heading>
            <Text>{description}</Text>
            <Text>
              <ViewMoreButton />
            </Text>
          </Stack>
        </CardBody>
        <CardFooter fontFamily="Poppins, sans-serif">
          <Text color="grey" position="absolute" bottom="2" right="2" fontSize="xs">
            Request was made on {requestDate}
          </Text>
        </CardFooter>
      </Card>
  
  );
};

export default CardComponent;
