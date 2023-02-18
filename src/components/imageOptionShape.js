import React from "react";
import { Box, Img, Text, GridItem, Grid } from "@chakra-ui/react";

function ImageOptionShape(props) {
  const { imageOption, option, id, state, setState } = props;
  return (
    <>
      {/* <Box>
        <GridItem mt={{ base: 5, sm: "100px" }} mb={10}>
          <Grid templateColumns="repeat(12, 1fr)">
            <Box
              // display={"flex"}
              // justifyContent={"center"}
              // alignItems={"center"}
              onClick={() => {
                setState(id);
              }}
            >
              <GridItem
                colSpan={3}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  w={7}
                  h={7}
                  border={state === id ? "none" : "2px solid #FC7162"}
                  bgColor={state === id ? "#22C600" : "transparent"}
                  color={state === id ? "white" : "#FC7162"}
                  borderRadius={50}
                >
                  <Text display={"flex"}>{option}</Text>
                </Box>
              </GridItem>
              <GridItem colSpan={9}>
                <Box
                  display={"flex"}
                  borderRadius={120}
                  justifyContent={"center"}
                >
                  <Img
                    w={{ base: "90px", sm: "130px", md: "180px" }}
                    src={imageOption}
                    alt="optionImages"
                  />
                </Box>
              </GridItem>
            </Box>
          </Grid>
        </GridItem>
      </Box> */}
      <Box>
        <GridItem className={"marginTopImageOptions"} mb={10}>
          <Grid templateColumns="repeat(12, 1fr)">
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              onClick={() => setState(id)}
            >
              <GridItem mx={{ base: 3, sm: 12 }} colSpan={3} display={"flex"}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  fontSize={{ base: "16px", sm: "30px" }}
                  fontWeight={"bold"}
                  w={{ base: 8, sm: 12 }}
                  h={{ base: 8, sm: 12 }}
                  border={state === id ? "none" : "2px solid #FC7162"}
                  bgColor={state === id ? "#22C600" : "transparent"}
                  color={state === id ? "white" : "#FC7162"}
                  borderRadius={50}
                >
                  <Text>{option}</Text>
                </Box>
              </GridItem>
              <GridItem colSpan={9}>
                <Box
                  display={"flex"}
                  w={{ base: "105px", sm: "180px", md: "220px" }}
                  h={{ base: "105px", sm: "180px", md: "220px" }}
                  borderRadius={120}
                  justifyContent={"center"}
                >
                  <Img
                    w={{ base: "90px", sm: "130px", md: "180px" }}
                    src={imageOption}
                    alt="optionImages"
                  />
                </Box>
              </GridItem>
            </Box>
          </Grid>
        </GridItem>
      </Box>
    </>
  );
}

export default ImageOptionShape;
