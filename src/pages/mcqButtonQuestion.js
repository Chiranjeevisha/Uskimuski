import { Box, HStack, Img, useBoolean } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import MCQ1Bg from "../assets/svg/learningBgMcq.svg";
import TopBar from "../components/topBar";
// import OrangeRedFacts from "../assets/OrangeRedFacts.svg";
import speakerIcon from "../assets/svg/speakerIconPink.svg";
import pauseIcon from "../assets/svg/pause-buttonPink.svg";
import OrangeRedLanguage from "../assets/svg/languageIconPink.svg";
// import OrangeRedLanguage from "../assets/OrangeRedLanguage.svg";

// import OrangeRedHints from "../assets/OrangeRedHints.svg";
// import OrangeRedSpeaker from "../assets/OrangeRedSpeaker.svg";
// import ExplanationAndFactModal from "../components/ExplanationAndFactModal";
import QuestionFromLeft from "../components/questionFromLeft";
import MCQOptions from "../components/mcqButtonOptions";
// import OrangeRedPause from "../assets/OrangeRedPause.svg";
// import RedSpeaker from "../assets/RedSpeaker.svg";

const MCQ1 = ({ data, questionNumber, totalQuestionLength, current }) => {
  // const [openModal, setOpenModal] = useBoolean(false);
  // const [modalData, setModalData] = useState();

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
      <Box bgGradient={"linear(to-b, #F9A1C2, #FBD3E2)"}>
        <Box bgImage={MCQ1Bg} h={"100vh"}>
          <TopBar title={data?.question_title} bg={"#F77783"} />
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
            <HStack mx={3}>
              <Img src={OrangeRedLanguage} />
              <Img
                src={labelChangeIndex !== 0 ? speakerIcon : pauseIcon}
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
            />
          </Box>

          <Box mt={10}>
            {data?.options.map((option, i) => (
              <Box key={i}>
                <MCQOptions
                  setIsPlaying={setIsPlaying}
                  isPlaying={isPlaying}
                  bg={"#F77783"}
                  id={option.id}
                  optionAlpha={option.alphabet}
                  option={option.option_text}
                  icon={labelChangeIndex === i + 1 ? pauseIcon : speakerIcon}
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
      </Box>
    </>
  );
};

export default MCQ1;
