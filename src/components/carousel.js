/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import mockData from "../api_data/mockApiResponse";
import MumbleJumble from "./MumbleJumble";
import Match from "./Match";
import FlashCard from "./FlashCard";
import QuestionFromLeft from "../components/QuestionFromLeft";
import "../App.css";
import MCQ1 from "./mcqButtonOptions";
import MCQ2 from "./MCQ2";
import MCQ3 from "./MCQ3";
import MCQ4 from "./MCQ4";
import MCQ5 from "./MCQ5";
import learningMockData from "../api_data/LearninData";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination, Autoplay, Virtual } from "swiper";
import "../App.css";
import data from "./mock_api/mockResponse";

// Carousel Part
SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

const Carousel = () => {
  //   const data = learningMockData();

  const MUMBLE_JUMBLE = "Mumble Jumble";
  const MATCH_THE_FOLLOWING = "Match The Following";
  const FLASHCARDS = "Flashcards";
  const QUESTION_MCQ1 = "MCQ1";
  const QUESTION_MCQ2 = "MCQ2";
  const QUESTION_MCQ3 = "MCQ3";
  const QUESTION_MCQ4 = "MCQ4";
  const QUESTION_MCQ5 = "MCQ5";

  const renderComponent = () => {
    return data?.map((d, i) => {
      switch (d.question_type) {
        case MUMBLE_JUMBLE:
          return (
            <SwiperSlide p={0} key={d.question_type}>
              <MumbleJumble
                data={d.question}
                questionNumber={i}
                totalQuestionLength={data.length}
              />
            </SwiperSlide>
          );
        case MATCH_THE_FOLLOWING:
          return (
            <SwiperSlide p={0} key={d.question_type}>
              <Match
                data={d.question}
                questionNumber={i}
                totalQuestionLength={data?.length}
              />
            </SwiperSlide>
          );
        case FLASHCARDS:
          return (
            <SwiperSlide p={0} key={d.question_type}>
              <FlashCard
                data={d.question}
                questionNumber={i}
                totalQuestionLength={data?.length}
              />
            </SwiperSlide>
          );
        case QUESTION_MCQ1:
          return (
            <SwiperSlide p={0} key={d.question_type}>
              <MCQ1
                data={d.question}
                questionNumber={i}
                totalQuestionLength={data?.length}
              />
            </SwiperSlide>
          );
        case QUESTION_MCQ2:
          return (
            <SwiperSlide p={0} key={d.question_type}>
              <MCQ2
                data={d.question}
                questionNumber={i}
                totalQuestionLength={data?.length}
              />
            </SwiperSlide>
          );
        case QUESTION_MCQ3:
          return (
            <SwiperSlide p={0} key={d.question_type}>
              <MCQ3
                data={d.question}
                questionNumber={i}
                totalQuestionLength={data?.length}
              />
            </SwiperSlide>
          );
        case QUESTION_MCQ4:
          return (
            <SwiperSlide p={0} key={d.question_type}>
              <MCQ4
                data={d.question}
                questionNumber={i}
                totalQuestionLength={data?.length}
              />
            </SwiperSlide>
          );
        case QUESTION_MCQ5:
          return (
            <SwiperSlide p={0} key={d.question_type}>
              <MCQ5
                data={d.question}
                questionNumber={i}
                totalQuestionLength={data?.length}
              />
            </SwiperSlide>
          );
        default:
          return null;
      }
    });
  };

  const [swiper, setSwiper] = useState(null);

  const params = {
    onSwiper: setSwiper,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + "</span>";
      },
    },
  };

  return (
    <>
      <Swiper {...params}>{renderComponent()}</Swiper>
      {swiper && (
        <>
          <Box className="swiper-pagination"></Box>
          {/* <Box className='swiper-button-prev'></Box> */}
          {/* <Box className='swiper-button-next'></Box> */}
        </>
      )}
    </>
  );
};

export default Carousel;
