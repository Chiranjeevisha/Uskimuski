import React, { useEffect, useState } from "react";
import QuestionWrapper from "../components/questionWrapper";
import backgroundImage from "../assets/svg/learningBgMcq.svg";
import tvIcon from "../assets/svg/tvIconPink.svg";
import factIcon from "../assets/svg/factIconPink.svg";
import languageIcon from "../assets/svg/languageIconPink.svg";
import speakerIcon from "../assets/svg/speakerIconPink.svg";
import pauseIcon from "../assets/svg/pause-buttonPink.svg";
import data from "../components/mock_api/mockResponse";
import { Grid } from "@chakra-ui/react";
import ImageOptionShape from "../components/imageOptionShape";

function ImageOptionQuestionShapes(current) {
  const [state, setState] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);
  const [labelChangeIndex, setLabelChangeIndex] = useState(false);
  const questionNumber = data[5].question.question_number;
  const questionImageOption = data[5].question.description;
  const title = data[5].question.question_title;
  useEffect(() => {
    window.speechSynthesis.cancel();
    setLabelChangeIndex(false);
  }, [current]);
  const imageOptionAnswers = data[5].question.img_options.map((item, a) => {
    return (
      <ImageOptionShape
        key={`image-Option-answers-${a}`}
        option={item.option}
        imageOption={item.img_link}
        state={state}
        setState={setState}
        id={item.id}
      />
    );
  });
  // console.log(data[5].question.img_options, "######@@");
  return (
    <div>
      <QuestionWrapper
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        // hintsIcon={tvIcon}
        // factsIcon={factIcon}
        labelChangeIndex={labelChangeIndex}
        setLabelChangeIndex={setLabelChangeIndex}
        LanguageIcon={languageIcon}
        speakerIcon={speakerIcon}
        pauseIcon={pauseIcon}
        backgroundImage={backgroundImage}
        bgColorTopFlag={"#F77783"}
        questionNumber={questionNumber}
        questionNumberColor={"#F77783"}
        bgColorQuestion={"#F77783"}
        questionTextColor={"white"}
        backgroundColorTop={"#F77783"}
        bgColorBg={"linear(to-b, #F9A1C2, #FBD3E2)"}
        question={questionImageOption}
        title={title}
      >
        <Grid mt={10} templateColumns="repeat(2, 1fr)">
          {imageOptionAnswers}
        </Grid>
      </QuestionWrapper>
    </div>
  );
}

export default ImageOptionQuestionShapes;
