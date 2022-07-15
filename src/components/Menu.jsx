import React from "react";
import { Box, Flex, Grid, Text, Input, Button, Icon } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
const Menu = () => {
  return (
    <Grid
      w="100%"
      h="420px"
      bg="white"
      borderBottom="2pt solid #E2E8F0"
      templateRows="60px 190px 180px"
    >
      <Box></Box>
      <Box>
        <Flex
          justifyContent={"center"}
          alignItems="center"
          flexDirection={"column"}
        >
          <Text fontSize="60px" fontWeight={"bold"} color="#2D3748">
            Find The Right
          </Text>
          <Flex>
            {" "}
            <Text
              bgGradient="linear-gradient(315deg, #89d4cf 0%, #6e45e1 74%)"
              bgClip="text"
              fontSize="60px"
              fontWeight="bold"
              m="0"
              p="0"
            >
              Four-Day
            </Text>
            <Text color="#2D3748" fontSize="60px" fontWeight="bold" m="0" p="0">
              <>&nbsp;</>Week Job
            </Text>
          </Flex>
        </Flex>
      </Box>
      <Box>
        <Input
          placeholder="Type job title or keyword"
          size={"lg"}
          w="425px"
          m="auto"
          mt="18px"
          borderRadius="20px"
          color="darkgray"
          boxShadow="xl"
          p="6"
          rounded="md"
          bg="white"
        />
        <Button
          colorScheme="gray"
          bg={"#E2E8F0"}
          ml="6px"
          size="md"
          h="47"
          borderRadius="13px"
          boxShadow="xl"
          p="6"
          rounded="md"
          mb="6px"
        >
          <Icon as={Search2Icon} color="#A0AEC0" />
        </Button>
        <Flex justifyContent="center">
          <Button
            bg="btnBlue"
            w="155px"
            ml={"5px"}
            mt="10px"
            color={"white"}
            border="2px solid #301a63"
          >
            🌍 Remote
          </Button>
          <Button
            bg="btnBlue"
            w="155px"
            ml={"5px"}
            mt="10px"
            color={"white"}
            border="2px solid #301a63"
          >
            👨‍💻 Tech
          </Button>
          <Button
            bg="btnBlue"
            w="155px"
            ml={"5px"}
            mt="10px"
            color={"white"}
            border="2px solid #301a63"
          >
            💹 Marketing
          </Button>
        </Flex>
      </Box>
    </Grid>
  );
};

export default Menu;
