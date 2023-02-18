import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  HStack,
  Img,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { TinderLikeCard } from "react-stack-cards";
import TopBar from "../components/topBar";
import FlashcardBg from "../assets/svg/learningBgFlashcard.svg";
import QuestionFromLeft from "../components/questionFromLeft";
// import SkyBlueFacts from "../assets/SkyBlueFacts.svg";
// import SkyBlueLanguage from "../assets/SkyBlueLanguage.svg";
// import factIcon from "../assets/svg/factIconPink.svg";
import languageIcon from "../assets/svg/languageIconBlue.svg";
import speakerIcon from "../assets/svg/speakerIconBlue.svg";
import pauseIcon from "../assets/svg/pauseIconBlue.svg";
// import SkyBlueHints from "../assets/SkyBlueHints.svg";
// import SkyBluePause from "../assets/SkyBluePause.svg";
// import SkyBlueSpeaker from "../assets/SkyBlueSpeaker.svg";
// import ExplanationAndFactModal from "../components/ExplanationAndFactModal";
import FlashcardErrorModal from "../components/flashCardErrorModal";

const FlashCard = ({
  data,
  questionNumber,
  totalQuestionLength,
  current,
  next,
}) => {
  const arr = [
    "https://static.vecteezy.com/system/resources/previews/002/856/738/original/cute-tiger-reading-a-book-animal-cartoon-concept-isolated-can-used-for-t-shirt-greeting-card-invitation-card-or-mascot-flat-cartoon-style-free-vector.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvbaMmJVMzvUFwWThO2hYsRkSGvmvipMaVspMgWdBe-Cqu5ZmpgGj_YtQNnYgkwqkOYXg&usqp=CAU",
    "https://static.vecteezy.com/system/resources/previews/002/913/355/non_2x/cute-rat-pooping-on-toilet-and-read-newspaper-animal-cartoon-concept-isolated-can-used-for-t-shirt-greeting-card-invitation-card-or-mascot-flat-cartoon-style-free-vector.jpg",
    "https://i.pinimg.com/736x/9e/38/f7/9e38f759ab8994f6cf742eb96b8695f8.jpg",
  ];

  const [openModal, setOpenModal] = useBoolean(false);
  const [modalData, setModalData] = useState();
  const [errorModal, setErrorModal] = useState(false);
  const [errorType, setErrorType] = useState("");

  let Tinder = useRef(null);
  const [show, setShow] = useState(false);
  const [isPlaying, setIsplaying] = useState(false);

  function textToSpeechFunction(text, i) {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      setIsplaying(false);
    }
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
    setIsplaying(true);
    speech.onend = () => setIsplaying(false);
  }

  function pauseSpeechFunction() {
    window.speechSynthesis.cancel();
    setIsplaying(false);
  }

  const [state, setState] = useState({
    directionToggle: "sideSlide",
    directionStack: "topRight",
    isOpen: false,
    selectedValue: 0,
    answer: 3,
  });
  useEffect(() => {
    window.speechSynthesis.cancel();
    setIsplaying(false);
  }, [current]);

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

  useEffect(() => {
    if (
      state.selectedValue === arr.length &&
      totalQuestionLength !== current + 1
    )
      next();
  }, [state.selectedValue]);

  const onTinderLeft = () => {
    // setShow(false);
    if (state.selectedValue === arr.length) return;
    if (state.answer !== state.selectedValue) {
      setState({
        ...state,
        selectedValue: state.selectedValue + 1,
        directionTinder: "swipeCornerDownLeft",
      });
      Tinder.swipe();
    } else {
      // setErrorModal(true);
      // setErrorType(0);
    }
  };
  const onTinderRight = () => {
    if (state.selectedValue === arr.length) return;
    if (state.answer === state.selectedValue) {
      // setErrorModal(true); setErrorType(2)
      setState({
        ...state,
        selectedValue: state.selectedValue + 1,
        directionTinder: "swipeCornerDownRight",
      });
    } else {
      setState({
        ...state,
        selectedValue: state.selectedValue + 1,
        directionTinder: "swipeCornerDownRight",
      });
      // setShow(true);
      setErrorModal(true);
      setErrorType(1);
    }
    Tinder.swipe();
  };

  return (
    <Box bgGradient={"linear(to-b, #02BDE7, #E1F9FE)"}>
      <Box h={"100vh"} bgImg={FlashcardBg}>
        <TopBar title={data?.question_title} bg={"#00A6DC"} />

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
							src={SkyBlueHints}
							onClick={() =>
								handleOpenModal('hints')
							}
						/>
						<Img
							src={SkyBlueFacts}
							onClick={() =>
								handleOpenModal('facts')
							}
						/> */}
          </HStack>
          {/* <Timer /> */}
          <HStack mx={3}>
            <Img src={languageIcon} />
            <Img
              src={!isPlaying ? speakerIcon : pauseIcon}
              onClick={() => {
                !isPlaying
                  ? textToSpeechFunction(data.description)
                  : pauseSpeechFunction();
              }}
            />
          </HStack>
        </HStack>
        <QuestionFromLeft
          questionNo={questionNumber}
          totalQuestionLength={totalQuestionLength}
          bg={"#00A6DC"}
          questionColor={"#00A6DC"}
          question={data?.description}
        />
        <Grid position="relative" h={"45%"} placeItems={"center"}>
          <Box
            position="absolute"
            borderRadius={30}
            width={"66.5%"}
            m={"auto"}
            zIndex={0}
            pt={10}
            overflow="hidden"
          >
            <TinderLikeCard
              images={arr}
              height={"230"}
              width={"350"}
              direction={state.directionTinder}
              duration={400}
              ref={(node) => (Tinder = node)}
              className={"customImg"}
              // children={() => <Text> cklznc</Text>}
            />
          </Box>
        </Grid>

        <HStack
          width={"60%"}
          m={"auto"}
          mt={5}
          justifyContent={"space-around"}
          px={16}
        >
          <Button
            onClick={onTinderLeft}
            borderRadius={"full"}
            px={2}
            py={1}
            border={"2px solid #F86561"}
          >
            <CloseIcon color={"#F86561"} boxSize={3} />
          </Button>
          <Button
            onClick={onTinderRight}
            borderRadius={"full"}
            px={2}
            py={1}
            bg={"#22C600"}
          >
            <CheckIcon color={"white"} />
          </Button>
        </HStack>
      </Box>

      {/* <ExplanationAndFactModal
				isOpen={openModal}
				onClose={setOpenModal.off}
				data={modalData}
			/> */}
      <FlashcardErrorModal
        isOpen={errorModal}
        onClose={() => setErrorModal(false)}
        type={errorType}
      />
    </Box>
  );
};

export default FlashCard;
