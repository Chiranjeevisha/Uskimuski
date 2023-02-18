import React from "react";
import { Box, Text } from "@chakra-ui/react";

function MatchAnswers(props) {
  const { optionText } = props;
  const { id, elementId, handleClick, isSelected } = props;

  return (
    <>
      {/* <div className="d-flex justify-content-end marginBottom">
        <div>
          <Col xs={12} className="">
            <img
              id={elementId}
              className={
                isSelected
                  ? "selectedMatchAnswer matchImageSize circleOnClick"
                  : "matchImageSize circleOnClick"
              }
              src={image2}
              alt=""
              onClick={() => handleClick(id, elementId)}
            />
          </Col>
        </div>
      </div> */}
      <Box>
        <Text
          id={elementId}
          onClick={() => handleClick(id, elementId)}
          display={"flex"}
          // mt={{ base: 8, sm: "100px" }}
          className={"matchAnswer"}
          mb={{ base: "45px", sm: "140px" }}
          justifyContent={"center"}
          alignItems={"center"}
          mx={5}
          fontSize={{ base: 14, sm: 25 }}
          fontWeight={"bold"}
          h={{ base: 7, sm: 12 }}
          w={{ base: 120, sm: 252 }}
          bgColor={"#3AB783"}
          color={"white"}
          borderRadius={50}
        >
          {optionText}
        </Text>
      </Box>
    </>
  );
}

export default MatchAnswers;
