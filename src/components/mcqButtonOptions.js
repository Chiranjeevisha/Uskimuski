import { Box, Center, Flex, HStack, Img, Text } from "@chakra-ui/react";
import React from "react";
// import RedSpeaker from '../assets/RedSpeaker.svg';
// import speakerIcon from "../assets/svg/speakerIcon.svg"

const MCQOptions = (props) => {
  const {
    optionAlpha,
    option,
    bg,
    onClick,
    setIsPlaying,
    isPlaying,
    icon,
    id,
  } = props;
  return (
    <Flex
      onClick={() => {
        setIsPlaying(id);
        console.log(isPlaying, "------------");
      }}
      bg={bg || "#F87365"}
      justifyContent={"center"}
      alignItems={"center"}
      m={"auto"}
      borderRadius={"full"}
      position={"relative"}
      w={"80%"}
    >
      <Center mt={50}>
        <Box
          position={"absolute"}
          left={6}
          top={-3}
          border={isPlaying === id ? "1px solid #22C600" : "1px solid #F87365"}
          px={2}
          borderRadius={"full"}
          bg={isPlaying === id ? "#22C600" : "white"}
        >
          <Text
            color={isPlaying === id ? "white" : "#F87365"}
            fontWeight={"bold"}
          >
            {optionAlpha || "A"}
          </Text>
        </Box>
      </Center>
      <HStack width={"100%"} m={1} justifyContent={"space-between"}>
        <Box></Box>
        <Box color={"white"} pl={35}>
          {option || "Sachin T"}
        </Box>
        <Img src={icon} pr={1} onClick={onClick} />
      </HStack>
    </Flex>
  );
};

export default MCQOptions;
