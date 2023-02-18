import React, { useState, useEffect } from "react";
import MatchQuestion from "../components/match_the_following/matchQuestions";
import MatchAnswer from "../components/match_the_following/matchAnswer";
import QuestionWrapper from "../components/questionWrapper";
import backgroundImage from "../assets/svg/learningBgMatch.svg";
import tvIcon from "../assets/svg/tvIconGreen.svg";
import factIcon from "../assets/svg/factIconGreen.svg";
import languageIcon from "../assets/svg/languageIconGreen.svg";
import speakerIcon from "../assets/svg/speakerIconGreen.svg";
import data from "../components/mock_api/mockResponse";
import pauseIcon from "../assets/svg/pauseButtonGreen.svg";
import Xarrow from "react-xarrows";
import Toast from "react-bootstrap/Toast";
import { Box, Spacer } from "@chakra-ui/react";

function MatchImageQuestionAnswer({ index, current }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [color, setColor] = useState("");
  const [selectedIds, setSelectedIds] = useState([]);
  const [left, setLeft] = useState(null);
  const [right, setRight] = useState(null);
  const [selectedQuestionId, setSelectedQuestionId] = useState("");
  const [selectedAnswerId, setSelectedAnswerId] = useState("");
  const [show, setShow] = useState(false);
  const [matchedAnswers, setMatchedAnswers] = useState([]);
  const matchQuestionAndAnswer = [];
  const [toastAnswerId, setToastAnswerId] = useState();
  const [labelChangeIndex, setLabelChangeIndex] = useState(null);
  const separatingToNumber = selectedAnswerId.replace("id-answer-", "");
  let compareAnswerId = Number(separatingToNumber);
  const newQuestionArray = [];

  const newAnswerArray = [];

  useEffect(() => {
    window.speechSynthesis.cancel();
    setLabelChangeIndex(null);
  }, [current]);

  const validateAnswer = () => {
    if (selectedQuestionId === compareAnswerId) {
      // return ToastBox("bg-primary", "Correct Answer");
    } else if (selectedQuestionId !== compareAnswerId) {
      // return ToastBox("bg-danger", "Wrong Answer");
    }
  };
  // console.log(
  //   "🚀 ~ file: matchImageQuestion.js:33 ~ MatchImageQuestionAnswer ~ newAnswerArray",
  //   newAnswerArray
  // );
  // console.log(
  //   "🚀 ~ file: matchImageQuestion.js:32 ~ MatchImageQuestionAnswer ~ newQuestionArray",
  //   newQuestionArray
  // );
  const handleQuestionClick = (id, elementId) => {
    setSelectedIds([...selectedIds, id]);

    const check = selectedIds.includes(id);
    if (!check) {
      setLeft(elementId);
      setSelectedQuestionId(id);
      if (right) {
        setRight(null);
      }
      setShow(false);
    }
  };
  useEffect(() => {
    if (left && right) {
      setLeft(null);
      setRight(null);
    }
  }, [left, right]);

  const handleAnswerClick = (id, elementId) => {
    if (!left) return;
    setSelectedIds([...selectedIds, id]);
    const check = selectedIds.includes(id);
    if (!check) {
      if (left) {
        setRight(elementId);
        setSelectedAnswerId(elementId);
        const _matchedAnswers = [...matchedAnswers];
        _matchedAnswers.push({
          questionId: left,
          answerId: elementId,
        });
        setShow(true);
        setMatchedAnswers(_matchedAnswers);
      }
    }
  };

  // const ToastBox = (toastType, content) => {
  //   if (toastAnswerId) {
  //     setToastAnswerId(null);
  //   }
  //   return (
  //     <Toast
  //       className={`text-light ${toastType} d-flex justify-content-center`}
  //       onClose={() => setShow(false)}
  //       show={show}
  //       delay={1000}
  //       style={{ marginTop: "-25px" }}
  //       autohide
  //     >
  //       <Toast.Body>{content}</Toast.Body>
  //     </Toast>
  //   );
  // };

  // console.log(data[1].question.img_questions[0].option, "+++++++");
  const matchQuestion = data[1].question.description;
  const questionNumber = data[1].question.question_number;
  const title = data[1].question.question_title;
  const MatchQuestionResourcesLeft = data[1].question.img_questions.map(
    (item, y) => {
      return (
        <MatchQuestion
          index={index}
          key={`image-card-option-${y}`}
          option={item.option}
          handleClick={handleQuestionClick}
          matchQuestionAndAnswer={matchQuestionAndAnswer}
          id={item.id}
          elementId={`id-question-${item.id}`}
          imageLeft={item.img_link}
          setColor={setColor}
          color={color}
        />
      );
    }
  );
  const ToastBox = (toastType, content) => {
    if (toastAnswerId) {
      setToastAnswerId(null);
    }
    return (
      <Toast
        className={`text-light ${toastType} d-flex justify-content-center`}
        onClose={() => setShow(false)}
        show={show}
        delay={1000}
        style={{ marginTop: "-25px" }}
        autohide
      >
        <Toast.Body>{content}</Toast.Body>
      </Toast>
    );
  };
  // question.img_answers[0].matching_option_id, "+++++++");
  const MatchAnswerResourcesRight = data[1].question.img_answers.map(
    (item, z) => {
      return (
        <MatchAnswer
          index={index}
          key={`image-card-option-${z}`}
          answer={item.answer}
          id={item.id}
          setShow={setShow}
          optionText={item.option_text}
          matchQuestionAndAnswer={matchQuestionAndAnswer}
          handleClick={handleAnswerClick}
          elementId={`id-answer-${item.matching_option_id}`}
        />
      );
    }
  );
  return (
    <div>
      <QuestionWrapper
        labelChangeIndex={labelChangeIndex}
        setLabelChangeIndex={setLabelChangeIndex}
        backgroundImage={backgroundImage}
        // hintsIcon={tvIcon}
        // factsIcon={factIcon}
        LanguageIcon={languageIcon}
        speakerIcon={speakerIcon}
        pauseIcon={pauseIcon}
        bgColorTopFlag={"#3AB783"}
        question={matchQuestion}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        bgColorQuestion={"#3AB783"}
        questionNumber={questionNumber}
        questionNumberColor={"#3AB783"}
        questionTextColor={"white"}
        bgColorBg={"linear(to-b, #6AE1B6, #D4FBF0)"}
        title={title}
      >
        <Box display={"Flex"} mt={4}>
          <Box>{MatchQuestionResourcesLeft}</Box>
          <Spacer />
          <Box>{MatchAnswerResourcesRight}</Box>
        </Box>
        {validateAnswer()}
        {matchedAnswers.map((ma, s) => {
          return (
            <Xarrow
              key={`arrowLineKey${s}`}
              color={"#3AB783"}
              strokeWidth={3}
              showHead={false}
              path="straight"
              start={ma.questionId}
              end={ma.answerId}
              zIndex={1}
            />
          );
        })}
      </QuestionWrapper>
    </div>
  );
}

export default MatchImageQuestionAnswer;
