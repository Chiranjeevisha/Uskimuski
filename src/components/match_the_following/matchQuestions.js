import { Box, Img, Spacer, Text } from "@chakra-ui/react";
import React from "react";

function MatchQuestion(props) {
  const {
    option,
    imageLeft,
    elementId,
    id,
    handleClick,
    color,
    setColor,
    isSelected,
  } = props;

  return (
    <>
      {/* <Box className="marginBottom">
        <Box
          xs={4}
          className="mt-3 circleIcon4 widthOptions fs-4 d-flex align-items-center justify-content-center text-pink me-3"
        >
          <div className="d-flex align-items-center">{option}</div>
        </Box>
        <Col xs={8} className="ps-0">
          <div className="d-flex justify-content-start">
            <img
              className={
                isSelected
                  ? "selectedMatchQuestion matchImageSize circleOnClick"
                  : "matchImageSize circleOnClick"
              }
              src={image1}
              alt=""
              id={elementId}
              onClick={() => handleClick(id, elementId)}
            />
          </div>
        </Col>
      </Box> */}

      <Box
        // mt={{ base: 4, sm: "40px" }}
        className="matchQuestion"
        display={"flex"}
        alignItems={"center"}
        onClick={() => {
          setColor(id);
        }}
      >
        <Box display={"flex"} alignItems={"center"}>
          <Text
            mx={5}
            display={"flex"}
            alignItems={"center"}
            backgroundColor={"white"}
            borderRadius={50}
            justifyContent={"center"}
            fontSize={{ base: "16px", sm: "25px" }}
            fontWeight={"bold"}
            w={{ base: 8, sm: "50px" }}
            h={{ base: 8, sm: "50px" }}
            border={color === id ? "none" : "2px solid #3AB783"}
            color={color === id ? "white" : "#3AB783"}
            // bgColor={"#22C600"}
            bgColor={color === id ? "#22C600" : "transparent"}
          >
            {option}
          </Text>
        </Box>
        <Spacer />
        <Img
          display={"flex"}
          alignItems={"center"}
          w={{ base: "60px", sm: 150 }}
          id={elementId}
          onClick={() => handleClick(id, elementId)}
          justifyContent={"start"}
          src={imageLeft}
          alt="questionImage"
        />
      </Box>
    </>
  );
}

export default MatchQuestion;
