import { Box, GridItem, Img } from "@chakra-ui/react";
import React, { useState } from "react";
import "../components/custom.css";
import speakerClicked from "../assets/svg/speakerIconClickedGreen.svg";

function ImageCardOptions(props) {
  const {
    option,
    buttonText,
    speakerIcon,
    id,
    cardBg,
    state,
    speechText,
    setState,
    setLabelChangeIndex,
    labelChangeIndex,
  } = props;

  function textToSpeechFunction(text, i) {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      setLabelChangeIndex(null);
    }
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
    setLabelChangeIndex(i);
    speech.onend = () => setLabelChangeIndex(null);
  }

  function pauseSpeechFunction() {
    window.speechSynthesis.cancel();
    setLabelChangeIndex(null);
  }
  return (
    <Box
      // mt={[50, 20, 50]}
      mt={{ base: 8, sm: 20 }}
    >
      <GridItem display={"flex"} justifyContent={"center"}>
        <Box onClick={() => setState(id)}>
          <Box
            className="heightButton"
            m={"0px"}
            // h={{ base: 142, sm: 250 }}
            borderRadius={30}
            // w={{ base: 132, sm: 250 }}
            bgRepeat={"no-repeat"}
            position={"relative"}
            bgImage={cardBg}
            // bgSize={{ base: "143px 138px", sm: "230px 250px" }}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              w={{ base: 8, sm: 12 }}
              h={{ base: 8, sm: 12 }}
              fontSize={{ base: "15px", sm: "20px" }}
              fontWeight={"bold"}
              bg={state === id ? "#22C600" : "white"}
              borderRadius={50}
              color={state === id ? "white" : "#F77783"}
              border={state === id ? "none" : "2px solid #F77783"}
            >
              {option}
            </Box>
            <Box
              position={"absolute"}
              bottom={0}
              alignItems={"center"}
              display={"flex"}
              justifyContent={"center"}
              borderRadius={50}
              h={{ base: 10, sm: "60px" }}
              w={{ base: 132, sm: 230 }}
              bg={state === id ? "#22C600" : "#F77783"}
            >
              <Box
                // display={"flex"}
                justifyContent={"center"}
                color={"white"}
                ml={2}
              >
                <Box
                  mr={{ base: 5, sm: 12 }}
                  fontSize={{ base: "16px", sm: "25px" }}
                >
                  {buttonText}
                </Box>
              </Box>
              <Box justifyContent={"end"} mr={1}>
                <Img
                  onClick={() => {
                    labelChangeIndex === null
                      ? textToSpeechFunction(speechText, +1)
                      : pauseSpeechFunction();
                  }}
                  w={{ base: 7, sm: 12 }}
                  src={state === id ? speakerClicked : speakerIcon}
                  alt="speaker"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </GridItem>
    </Box>
  );
}

export default ImageCardOptions;
