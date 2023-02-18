// import { Box, Center, HStack, Img, Spacer, Text } from "@chakra-ui/react";
// import React from "react";
// import lionIconTop from "../assets/svg/lionWithOne.svg";

// const QuestionWrapper = (props) => {
//   const {
//     backgroundImage,
//     activityName,
//     tvIcon,
//     factIcon,
//     languageIcon,
//     speakerIcon,
//     questionNumber,
//     question,
//     bgColorQuestion,
//     questionNumberColor,
//     backgroundColorTop,
//   } = props;
//   return (
//     <>
//       {/* Background part */}
//       <Box
//         h={"100vh"}
//         // bgColor={"#3AB783"}
//         // Background={linear-gradient(#e66465, #9198e5)}
//         // bgGradient={["linear(to-t, #3AB783 )", "linear(to-b, #3AB783)"]}
//         // bgGradient={"linear(to-r, green.200, pink.500)"}
//         // bgColor={"#3AB783"}
//         bgGradient={"linear(to-b, #75C7FD, #A788FD)"}
//         // borderBottomRadius={25}
//         // justifyContent={"flex-start"}
//         bgImage={backgroundImage}
//       >
//         {/* top color part */}
//         <Center
//           position={"relative"}
//           borderBottomRadius={20}
//           h={90}
//           bgColor={backgroundColorTop}
//         >
//           <Text fontSize={19} fontWeight={"bold"} color={"white"}>
//             {activityName}
//           </Text>

//           <Img
//             position={"absolute"}
//             top={"65px"}
//             src={lionIconTop}
//             alt="lionIconTop"
//             w={"40px"}
//           />
//         </Center>
//         {/* top four icons part */}
//         <HStack mt={5}>
//           <Box display={"flex"}>
//             <Img w={"32px"} src={tvIcon} alt={"tvIcon"} />
//             <Img w={"32px"} src={factIcon} alt={"factIcon"} />
//           </Box>
//           <Spacer />
//           <Center>
//             <Img w={"32px"} src={tvIcon} alt={"tvIcon"} />
//           </Center>
//           <Spacer />
//           <Box display={"flex"}>
//             <Img w={"32px"} src={languageIcon} alt={"languageIcon"} />
//             <Img w={"32px"} src={speakerIcon} alt={"speakerIcon"} />
//           </Box>
//         </HStack>
//         {/* Question part */}
//         <Box
//           position={"relative"}
//           border={"1px solid white"}
//           w={350}
//           mt={5}
//           px={10}
//           py={30}
//           borderEndRadius={50}
//           backgroundColor={bgColorQuestion}
//         >
//           <Box
//             position={"absolute"}
//             bottom={70}
//             border={"1px solid white"}
//             borderRadius={50}
//             w={160}
//             backgroundColor={"#FFF364"}
//           >
//             <Text color={questionNumberColor}>{questionNumber}</Text>
//           </Box>
//           <Center>
//             <Text color={"white"}>{question}</Text>
//           </Center>
//         </Box>
//         <Box>{props.children}</Box>
//       </Box>
//     </>
//   );
// };

// export default QuestionWrapper;

import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Center, Grid, HStack, Img, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import lionIconTop from "../assets/svg/lionWithOne.svg";
// import Timer from "./timerComponents";

const QuestionWrapper = (props) => {
  const {
    title,
    hintsIcon,
    factsIcon,
    pauseIcon,
    speakerIcon,
    LanguageIcon,
    isPlaying,
    setIsPlaying,
    question,
    questionNumberColor,
    questionNumber,
    bgColorQuestion,
    questionTextColor,
    backgroundImage,
    bgColorBg,
    bgColorTopFlag,
    index,
    Timer,
    musicComponent,
    labelChangeIndex,
    setLabelChangeIndex,
  } = props;

  function textToSpeechFunction(text, i) {
    console.log("text:", text);
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
    <Box bgGradient={bgColorBg}>
      <Box
        bgImage={backgroundImage}
        w={"100%"}
        h={"100vh"}
        overflow={"auto"}
        bgRepeat={"no-repeat"}
        bgPosition={"center"}
        bgSize={"cover"}
      >
        <Box
          w={"100%"}
          bgColor={bgColorTopFlag}
          // h={["14vh", "20vh"]}
          className={"heightTopFlag"}
          borderBottomRadius={25}
          justifyContent={"flex"}
        >
          <Grid
            position={"relative"}
            h={"100%"}
            gridTemplateColumns={"20% 80%"}
            placeItems={"center"}
          >
            <Center>
              <ChevronLeftIcon boxSize={[8, 14]} color={"white"} />
            </Center>
            <Center ml={"-25%"}>
              <Text
                mb={2}
                color={"white"}
                fontWeight={"bold"}
                fontSize={["md", 30]}
                mt={3}
              >
                {title}
              </Text>
            </Center>
          </Grid>
          <Center>
            <Img src={lionIconTop} mt={[-5, -50]} w={[41, "100px"]} />
          </Center>
          {/* top four icons*/}
          <HStack
            m={"auto"}
            mt={["1vh", "5vh"]}
            w={"95%"}
            justifyContent={"space-between"}
            borderRadius={20}
          >
            <HStack>
              <Img
                w={["30px", "55px"]}
                src={hintsIcon}
                // onClick={() =>
                // 	handleOpenModal('hints')
                // }
              />
              <Img
                w={["30px", "55px"]}
                src={factsIcon}
                // onClick={() =>
                // 	handleOpenModal('facts')
                // }
              />
            </HStack>
            <Box>{Timer}</Box>
            {/* <Timer /> */}
            <HStack mx={3}>
              {/* <Img w={["30px", "55px"]} src={LanguageIcon} />
              <Img
                w={["30px", "55px"]}
                src={isPlaying ? speakerIcon : pauseIcon}
                onClick={() => {
                  setIsPlaying(!isPlaying);
                  // console.log('clicked');
                  // textToSpeech(question);
                }}
              /> */}
              <Img w={["30px", "55px"]} src={LanguageIcon} />
              <Img
                w={["30px", "55px"]}
                src={labelChangeIndex !== 0 ? speakerIcon : pauseIcon}
                onClick={() => {
                  labelChangeIndex === null
                    ? textToSpeechFunction(question, 0)
                    : pauseSpeechFunction();
                }}
              />
            </HStack>
          </HStack>
          {/* questionPart */}
          <Box
            position={"relative"}
            border={["1px solid white", "2px solid white"]}
            w={["93%"]}
            mt={[8, 10]}
            px={[10, 30]}
            py={[5, 58]}
            borderEndRadius={[50, 80]}
            backgroundColor={bgColorQuestion}
          >
            <Box
              display={"flex"}
              fontWeight={["normal", "bold"]}
              fontSize={["normal", 25]}
              alignItems={"center"}
              justifyContent={"center"}
              position={"absolute"}
              bottom={["87%", "87%"]}
              border={"1px solid white"}
              borderRadius={50}
              w={[160, 250]}
              h={[7, 50]}
              backgroundColor={"#FFF364"}
            >
              <Text color={questionNumberColor}>{questionNumber}</Text>
            </Box>

            <Text
              display={"flex"}
              justifyContent={"start"}
              fontSize={[15, 30]}
              color={questionTextColor}
            >
              {question}
            </Text>
            <Box>{musicComponent}</Box>
          </Box>
          <Box pb={5}>{props.children}</Box>
        </Box>
      </Box>
    </Box>
  );
};

export default QuestionWrapper;
