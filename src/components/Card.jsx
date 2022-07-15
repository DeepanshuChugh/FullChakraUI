import { Box, Container, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import "./card.css";

const Card = ({ ...item }) => {
  const { tech, title, salary, img, jobtype, i1, i2, i3, i4, design } = item;
  return (
    <Container maxW="2xl" className={`card ${design ? "outline" : "default"}`}>
      <HStack spacing="9px">
        <Box w="40px" h="98px">
          <Image
            src={
              img
                ? { img }
                : "https://www.wework4days.com/_next/image?url=https%3A%2F%2Fapi.wework4days.com%2Fassets%2F1f61d027-d061-4780-9198-fb8c716d6e0a&w=2048&q=75"
            }
            w="32px"
            h="32px"
            mt="10px"
          ></Image>
        </Box>
        <Box w="420px" h="98px">
          <VStack align="stretch" spacing={"0"} mt="9px">
            <Box>
              <Text fontSize={"sm"} fontWeight="light" align={"left"}>
                {tech ? { tech } : "Talwind"}
              </Text>
            </Box>

            <Box>
              <Text fontSize="22px" fontWeight="bold" align={"left"}>
                {title ? { title } : "Lead Game Developer"}
              </Text>
            </Box>

            <Box>
              <Text
                align={"left"}
                fontSize="sm"
                fontWeight={"semibold"}
                color="grey"
              >
                {salary ? { salary } : "50k-60k"}
              </Text>
            </Box>
          </VStack>
        </Box>
        <Box w="170px" h="98px">
          <VStack align="stretch" spacing={"0"} mt="9px">
            <Box h="30px" align={"right"}>
              {i1} {i2} {i3} {i4}
            </Box>
            <Box h="50px" mt="20px">
              <Text align={"end"} mt="29px" color="grey">
                Full Time
              </Text>
            </Box>
          </VStack>
        </Box>
      </HStack>
    </Container>
  );
};

export default Card;
