import React, { useEffect, useState } from "react";
import QuestionWrapper from "../components/questionWrapper";
import backgroundImage from "../assets/svg/learningBgMcq.svg";
import tvIcon from "../assets/svg/tvIconPink.svg";
import factIcon from "../assets/svg/factIconPink.svg";
import languageIcon from "../assets/svg/languageIconPink.svg";
import speakerIcon from "../assets/svg/speakerIconPink.svg";
import ImageOptionAnswer from "../components/imageOptionAnswer";
import pauseIcon from "../assets/svg/pause-buttonPink.svg";
import data from "../components/mock_api/mockResponse";
import { Grid } from "@chakra-ui/react";
import MusicComponent from "../components/musicComponent";
import parrotSound from "../assets/audio/parrotSound.mp3";

function ImageOptionQuestion(current) {
  const [state, setState] = useState("");
  const [isPlaying, setIsPlaying] = useState(true);
  const questionNumber = data[4].question.question_number;
  const questionImageOption = data[4].question.description;
  const title = data[4].question.question_title;
  const [labelChangeIndex, setLabelChangeIndex] = useState(false);
  useEffect(() => {
    window.speechSynthesis.cancel();
    setLabelChangeIndex(false);
  }, [current]);
  const imageOptionAnswers = data[4].question.img_options.map((item, a) => {
    return (
      <ImageOptionAnswer
        key={`image-Option-answers-${a}`}
        option={item.option}
        imageOption={item.img_link}
        id={item.id}
        state={state}
        setState={setState}
      />
    );
  });
  const [play, setPlay] = useState(false);
  useEffect(() => {
    return () => {
      setPlay(false);
    };
  }, []);
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
        musicComponent={
          <MusicComponent
            key={`musicComponentData`}
            //  index={index}
            music={parrotSound}
            play={play}
            setPlay={setPlay}
          />
        }
      >
        <Grid mt={10} templateColumns="repeat(2, 1fr)">
          {imageOptionAnswers}
        </Grid>
      </QuestionWrapper>
    </div>
  );
}

export default ImageOptionQuestion;
