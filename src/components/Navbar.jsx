import React from "react";
import { Box, Button, Flex, Spacer, HStack } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex
      bg="white"
      w="100%"
      h="60px"
      borderBottom="0.5pt solid #E2E8F0"
      justifyContent="space-around"
      alignItems="center"
    >
      <Box ml="5">
        <Button
          bg={"grad"}
          fontSize="xl"
          color={"white"}
          p="0"
          m={"0"}
          borderRadius="md"
        >
          4d
        </Button>
      </Box>
      <Spacer />
      <HStack spacing="12px" mr="5">
        <Box>
          <Button variant="ghost" color="darkgray">
            Sign In
          </Button>
        </Box>

        <Box>
          <Button colorScheme="blue" variant="outline">
            Sign Up
          </Button>
        </Box>
        <Box>
          <Button bg={"grad"} color="white">
            Post a Job 🚀
          </Button>
        </Box>
      </HStack>
    </Flex>
  );
};

export default Navbar;
