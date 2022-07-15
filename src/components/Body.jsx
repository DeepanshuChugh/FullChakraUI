import { Box, Container, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";

const Body = () => {
  return (
    <Box bg="gray" w="100%">
      <Container maxW="2xl">
        <Box h="50px"></Box>
        <Flex>
          <Box h="80px">
            <Text fontSize="40px" fontWeight="bold" color="#6B46C1">
              Recent
            </Text>
          </Box>
          <Box h="80px" ml="8px">
            <Text fontSize="40px" fontWeight="bold">
              Jobs
            </Text>
          </Box>
        </Flex>
      </Container>
      <Card i1={"🌍"} i2={"🔥"} i3={"📌"} i4={"🔖"}></Card>
      <Card design="outline" i3={"📌"} i4={"🔖"}></Card>
      <Card design="outline" i1={"🌍"} i2={"🔥"} i3={"📌"} i4={"🔖"}></Card>
      <Card i1={"🌍"} i2={"🔥"} i3={"📌"} i4={"🔖"}></Card>
      <Card design="outline"></Card>
      <Card></Card>
    </Box>
  );
};

export default Body;
