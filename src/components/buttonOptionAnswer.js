import { Box, Center, Flex, HStack, Img, Text } from "@chakra-ui/react";
import React from "react";

const ButtonOptionAnswer = (props) => {
  const { optionAlpha, option, speakerIcon } = props;
  return (
    <Flex
      bg={"#F77783"}
      justifyContent={"center"}
      alignItems={"center"}
      m={"auto"}
      borderRadius={"full"}
      position={"relative"}
      w={"80%"}
    >
      <Center>
        <Box
          position={"absolute"}
          left={6}
          top={-3}
          border={"1px solid red"}
          px={2}
          borderRadius={"full"}
          bg={"white"}
        >
          <Text color={"#F87365"} fontWeight={"bold"}>
            {optionAlpha || "A"}
          </Text>
        </Box>
      </Center>
      <HStack width={"100%"} m={1} justifyContent={"space-between"}>
        <Box></Box>
        <Box color={"white"} pl={35}>
          {option || "Sachin T"}
        </Box>
        <Img src={speakerIcon} pr={1} />
      </HStack>
    </Flex>
  );
};

export default ButtonOptionAnswer;
