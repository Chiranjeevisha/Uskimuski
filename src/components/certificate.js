import { Box, Img } from "@chakra-ui/react";
import React from "react";
import certificate from "../assets/images/certificate.png";

function Certificate() {
  return (
    <Box
      display={"flex"}
      bg={"#CAC2BF"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Img src={certificate} alt={"certificate"} />
    </Box>
  );
}

export default Certificate;
