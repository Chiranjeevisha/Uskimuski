import React, { useEffect, useState } from "react";
import ImageCardOptions from "../components/imageCardOptions";
import QuestionWrapper from "../components/questionWrapper";
import backgroundImage from "../assets/svg/learningBgMcq.svg";
import tvIcon from "../assets/svg/tvIconPink.svg";
import factIcon from "../assets/svg/factIconPink.svg";
import languageIcon from "../assets/svg/languageIconPink.svg";
import speakerIcon from "../assets/svg/speakerIconPink.svg";
import pauseIcon from "../assets/svg/pause-buttonPink.svg";
import data from "../components/mock_api/mockResponse";
import { Grid } from "@chakra-ui/react";

function ImageCardQuestion(current) {
  const [state, setState] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);
  const [labelChangeIndex, setLabelChangeIndex] = useState(false);
  // console.log(
  //   "🚀 ~ file: imageCardQuestion.js:14 ~ ImageCardQuestion ~ state",
  //   state
  // );
  // console.log(data[6].question.img_options[0], "######@@");
  const questionNumber = data[6].question.question_number;
  const imageCardQuestiones = data[6].question.description;
  const title = data[6].question.question_title;
  // console.log("🚀 ~ imageCardQuestionDes", imageCardQuestiones);
  const imageCardQuestionData = data[6].question.img_options.map((item, g) => {
    return (
      <ImageCardOptions
        key={`image-Card-Data ${g}`}
        cardBg={item.img_link}
        option={item.option}
        buttonText={item.text}
        setLabelChangeIndex={setLabelChangeIndex}
        labelChangeIndex={labelChangeIndex}
        speakerIcon={item.speakerIcon}
        setState={setState}
        state={state}
        id={item.id}
      />
    );
  });
  useEffect(() => {
    window.speechSynthesis.cancel();
    setLabelChangeIndex(false);
  }, [current]);
  return (
    <div>
      <QuestionWrapper
        // hintsIcon={tvIcon}
        // factsIcon={factIcon}
        LanguageIcon={languageIcon}
        labelChangeIndex={labelChangeIndex}
        setLabelChangeIndex={setLabelChangeIndex}
        speakerIcon={speakerIcon}
        pauseIcon={pauseIcon}
        question={imageCardQuestiones}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        bgColorTopFlag={"#F77783"}
        bgColorQuestion={"#F77783"}
        questionNumber={questionNumber}
        questionNumberColor={"#F77783"}
        questionTextColor={"white"}
        backgroundImage={backgroundImage}
        bgColorBg={"linear(to-b, #F9A1C2, #FBD3E2)"}
        title={title}
      >
        <Grid templateColumns="repeat(2, 1fr)">{imageCardQuestionData}</Grid>
      </QuestionWrapper>
    </div>
  );
}

export default ImageCardQuestion;
