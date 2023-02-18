// import { Box, useBoolean } from "@chakra-ui/react";
// import React, { useState } from "react";
// import QuestionWrapper from "../components/questionWrapper";
// import data from "../components/mock_api/mockResponse";
// import MCQOptions from "../components/mcqButtonOptions";
// import backgroundImage from "../assets/svg/learningBgMcq.svg";
// import tvIcon from "../assets/svg/tvIconPink.svg";
// import factIcon from "../assets/svg/factIconPink.svg";
// import languageIcon from "../assets/svg/languageIconPink.svg";
// import speakerIcon from "../assets/svg/speakerIconPink.svg";
// import pauseIcon from "../assets/svg/pause-buttonPink.svg";
// import { Grid } from "@chakra-ui/react";

// function McqButtonQuestionModal() {
//     const [openModal, setOpenModal] = useBoolean(false);
// 	const [modalData, setModalData] = useState();
//   const [isPlaying, setIsPlaying] = useState(true);
//   const imageCardQuestion = data[3].question.question_description;
//   const imageCardTitle = data[3].question.question_title;
//   const questionNumber = data[3].question.question_number;

// 	const handleOpenModal = (type) => {
// 		if (type === 'hints') {
// 			setOpenModal.on();
// 			setModalData({
// 				title: 'Hints',
// 				description: data.hint,
// 			});
// 		} else if (type === 'facts') {
// 			setOpenModal.on();
// 			setModalData({
// 				title: 'Facts',
// 				description: data.fact,
// 			});
// 		}
// 	};
//   return (
//     <Box>
//       <QuestionWrapper
//         hintsIcon={tvIcon}
//         factsIcon={factIcon}
//         LanguageIcon={languageIcon}
//         speakerIcon={speakerIcon}
//         pauseIcon={pauseIcon}
//         question={imageCardQuestion}
//         isPlaying={isPlaying}
//         setIsPlaying={setIsPlaying}
//         bgColorTopFlag={"#F77783"}
//         bgColorQuestion={"#F77783"}
//         questionNumber={questionNumber}
//         questionNumberColor={"#F77783"}
//         questionTextColor={"white"}
//         backgroundImage={backgroundImage}
//         bgColorBg={"linear(to-b, #F9A1C2, #FBD3E2)"}
//         title={imageCardTitle}
//       >
/* <Grid templateColumns="repeat(2, 1fr)">{mcqButtonOptionData}</Grid> */

//         <Box mt={10}>
//           {data[3].question.options.map((option, i) => (
//             <>
//               <MCQOptions
//                 key={`mcqOptionData${i}`}
//                 bg={"#F77783"}
//                 optionAlpha={option.alphabet}
//                 option={option.option_text}
//               />
//               <br />
//             </>
//           ))}
//         </Box>
//       </QuestionWrapper>
//     </Box>
//   );
// }

// export default McqButtonQuestionModal;

import { Box, HStack, Img, useBoolean } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import MCQ1Bg from '../assets/MCQ1Bg.svg';
import backgroundImage from "../assets/svg/learningBgMcq.svg";
import TopBar from "../components/topBar";
// import factIcon from "../assets/svg/factIconPink.svg";
// import OrangeRedFacts from "../assets/OrangeRedFacts.svg";
// import OrangeRedLanguage from "../assets/OrangeRedLanguage.svg";
import languageIcon from "../assets/svg/languageIconPink.svg";
// import tvIcon from "../assets/svg/tvIconPink.svg";
// import OrangeRedHints from "../assets/OrangeRedHints.svg";
// import OrangeRedSpeaker from "../assets/OrangeRedSpeaker.svg";
import speakerIconPink from "../assets/svg/speakerIconPink.svg";
import pauseIconPink from "../assets/svg/pause-buttonPink.svg";
import pauseIconWhite from "../assets/svg/pauseIconWhite.svg";
import ExplanationAndFactModal from "../components/explanationAndFactModal";
import QuestionFromLeft from "../components/questionFromLeft";
import MCQOptions from "../components/mcqButtonOptions";
// import { Box, HStack, Img, useBoolean } from '@chakra-ui/react';
// import React, { useState } from 'react';
// import MCQ1Bg from '../assets/MCQ1Bg.svg';
// import TopBar from '../components/TopBar';
// import OrangeRedFacts from '../assets/OrangeRedFacts.svg';
// import OrangeRedLanguage from '../assets/OrangeRedLanguage.svg';
// import OrangeRedHints from '../assets/OrangeRedHints.svg';
// import OrangeRedSpeaker from '../assets/OrangeRedSpeaker.svg';
// import ExplanationAndFactModal from '../components/ExplanationAndFactModal';
// import QuestionFromLeft from '../components/QuestionFromLeft';
// import MCQOptions from '../components/MCQOptions';
// import OrangeRedPause from '../assets/OrangeRedPause.svg';
// import RedSpeaker from '../assets/RedSpeaker.svg';

const MCQ4 = ({ data, questionNumber, totalQuestionLength, current }) => {
  // console.log("data:", data);
  const [openModal, setOpenModal] = useBoolean(false);
  //   const [modalData, setModalData] = useState();

  // const handleOpenModal = (type) => {
  // 	if (type === 'hints') {
  // 		setOpenModal.on();
  // 		setModalData({
  // 			title: 'Hints',
  // 			description: data.hint,
  // 		});
  // 	} else if (type === 'facts') {
  // 		setOpenModal.on();
  // 		setModalData({
  // 			title: 'Facts',
  // 			description: data.fact,
  // 		});
  // 	}
  // };
  const [isPlaying, setIsPlaying] = useState("");
  const [labelChangeIndex, setLabelChangeIndex] = useState(null);

  function textToSpeechFunction(text, i) {
    // console.log("text:", text);
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
  useEffect(() => {
    window.speechSynthesis.cancel();
    setLabelChangeIndex(false);
  }, [current]);
  return (
    <>
      <Box
        // border={'1px solid red'}
        bgGradient={"linear(to-b, #F9A1C2, #FBD3E2)"}
      >
        <Box bgImage={backgroundImage} h={"100vh"}>
          <TopBar title={data?.question_title} bg={"#F77783"} />
          {/* Timer HSTACK */}
          <HStack
            m={"auto"}
            mt={"4vh"}
            w={"90%"}
            justifyContent={"space-between"}
            borderRadius={20}
          >
            <HStack>
              {/* <Img
								src={OrangeRedHints}
								onClick={() =>
									handleOpenModal('hints')
								}
							/>
							<Img
								src={OrangeRedFacts}
								onClick={() =>
									handleOpenModal('facts')
								}
							/> */}
            </HStack>
            {/* <Timer /> */}
            <HStack mx={3}>
              <Img src={languageIcon} />
              <Img
                src={labelChangeIndex !== 0 ? speakerIconPink : pauseIconPink}
                onClick={() => {
                  labelChangeIndex === null
                    ? textToSpeechFunction(data.description, 0)
                    : pauseSpeechFunction();
                }}
              />
            </HStack>
          </HStack>
          <Box mt={3}>
            <QuestionFromLeft
              questionNo={questionNumber}
              totalQuestionLength={totalQuestionLength}
              bg={"#F77783"}
              questionColor={"#F77783"}
              question={data?.description}
              questionImg={data.question_title_img}
            />
          </Box>

          <Box mt={10}>
            {data?.options.map((option, i) => (
              <Box key={i}>
                <MCQOptions
                  bg={"#F77783"}
                  optionAlpha={option.alphabet}
                  option={option.option_text}
                  id={option.id}
                  setIsPlaying={setIsPlaying}
                  isPlaying={isPlaying}
                  icon={
                    labelChangeIndex === i + 1
                      ? pauseIconWhite
                      : speakerIconPink
                  }
                  onClick={() => {
                    labelChangeIndex === null
                      ? textToSpeechFunction(option.option_text, i + 1)
                      : pauseSpeechFunction();
                  }}
                />
                <br />
              </Box>
            ))}
          </Box>
        </Box>
        <ExplanationAndFactModal
          isOpen={openModal}
          onClose={setOpenModal.off}
          data={data?.question_title_img}
        />
      </Box>
    </>
  );
};

export default MCQ4;

// const MCQ4 = ({ data, questionNumber, totalQuestionLength }) => {
//   //   console.log("data:", data);
//   const [openModal, setOpenModal] = useBoolean(false);
//   const [modalData, setModalData] = useState();

//   const handleOpenModal = (type) => {
//     if (type === "hints") {
//       setOpenModal.on();
//       setModalData({
//         title: "Hints",
//         description: data.hint,
//       });
//     } else if (type === "facts") {
//       setOpenModal.on();
//       setModalData({
//         title: "Facts",
//         description: data.fact,
//       });
//     }
//   };

//   return (
//     <>
//       <Box
//         // border={'1px solid red'}
//         bgGradient={"linear(to-b, #F9A1C2, #FBD3E2)"}
//       >
//         <Box bgImage={backgroundImage} h={"100vh"}>
//           <TopBar title={data?.question_title} bg={"#F77783"} />
//           {/* console.log(); */}
//           {/* Timer HSTACK */}
//           <HStack
//             m={"auto"}
//             mt={"4vh"}
//             w={"90%"}
//             justifyContent={"space-between"}
//             borderRadius={20}
//           >
//             <HStack>
//               <Img src={tvIcon} onClick={() => handleOpenModal("hints")} />
//               <Img src={factIcon} onClick={() => handleOpenModal("facts")} />
//             </HStack>
//             {/* <Timer /> */}
//             <HStack mx={3}>
//               <Img src={languageIcon} />
//               <Img
//                 src={speakerIcon}
//                 onClick={() => {
//                   //   console.log("clicked");
//                   // textToSpeech(data.description);
//                 }}
//               />
//             </HStack>
//           </HStack>
//           <Box mt={3}>
//             <QuestionFromLeft
//               questionNo={questionNumber}
//               totalQuestionLength={totalQuestionLength}
//               bg={"#F77783"}
//               questionColor={"#F77783"}
//               question={data?.description}
//               questionImg={data.question_title_img}
//             />
//           </Box>

//           <Box mt={10}>
//             {data?.options.map((option, i) => (
//               <>
//                 <MCQOptions
//                   bg={"#F77783"}
//                   optionAlpha={option.alphabet}
//                   option={option.option_text}
//                 />
//                 <br />
//               </>
//             ))}
//           </Box>
//         </Box>
//         <ExplanationAndFactModal
//           isOpen={openModal}
//           onClose={setOpenModal.off}
//           data={data?.question_title_img}
//         />
//       </Box>
//     </>
//   );
// };

// export default MCQ4;
