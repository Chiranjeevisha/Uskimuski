import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Center, Grid, Img, Text } from "@chakra-ui/react";
import lionIconTop from "../assets/svg/lionWithOne.svg";
import React from "react";
// import rank1 from "../assets/rank_1.svg";

const TopBar = ({ title, bg }) => {
  return (
    <>
      <Box
        w={"100%"}
        // bgImage={rank1}
        bg={bg || "#807FFB"}
        h={"14vh"}
        borderBottomRadius={25}
        justifyContent={"flex-start"}
      >
        <Grid
          pos={"relative"}
          h={"100%"}
          gridTemplateColumns={"20% 80%"}
          placeItems={"center"}
        >
          <Center>
            <ChevronLeftIcon boxSize={8} color={"white"} />
          </Center>
          <Center ml={"-25%"}>
            <Text color={"white"} fontSize={"md"}>
              {title}
            </Text>
          </Center>
        </Grid>
        <Center>
          <Img src={lionIconTop} position={"absolute"} w={41} />
        </Center>
      </Box>
    </>
  );
};

export default TopBar;
