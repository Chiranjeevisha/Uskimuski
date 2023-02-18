/* eslint-disable no-useless-concat */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Center,
  Circle,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
// import mockData from "../api_data/mockApiResponse";
// import MumbleJumble from "./MumbleJumble";
import Match from "../matchImageQuestion";
import FlashCard from "../flashCard";
// import QuestionFromLeft from "../components/QuestionFromLeft";
import "../../App.css";
import MCQ1 from "../mcqButtonQuestion";
import MCQ2 from "../imageOptionQuestion";
import MCQ3 from "../imageOptionQuestionShape";
import MCQ4 from "../mcqButtonQuestionModal";
import MCQ5 from "../imageCardQuestion";
// import learningMockData from "../../components/mock_api/learningMockApi";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Navigation, Pagination, Autoplay, Virtual } from "swiper";
import learningMockData from "../../components/mock_api/learningMockApi";
// import "../App.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Carousel Part
SwiperCore.use([Navigation, Pagination, Autoplay, Virtual]);

const Home = () => {
  const data = [
    // Vijay
    {
      question_type: "MCQ1",
      question: {
        question_title: "MCQ",
        description:
          "In which city of Germany is the largest port?Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        options: [
          {
            id: 1,
            alphabet: "A",
            option_text: "Bremen",
          },
          {
            id: 2,
            alphabet: "B",
            option_text: "Hamburg",
          },
          {
            id: 3,
            alphabet: "C",
            option_text: "Norden",
          },
          {
            id: 4,
            alphabet: "D",
            option_text: "Baltic",
          },
        ],
      },
    },

    // Jeev
    {
      question_type: "MCQ2",
      question: {
        question_title: "MCQ",
        description: "Guess the Bird Audio",
        question_audio: "Link",
        options: [
          {
            alphabet: "A",
            img_link: "Link",
          },
          {
            alphabet: "B",
            img_link: "Link",
          },
          {
            alphabet: "C",
            img_link: "Link",
          },
          {
            alphabet: "D",
            img_link: "Link",
          },
        ],
      },
    },

    //Jeev
    {
      question_type: "MCQ3",
      question: {
        question_title: "MCQ",
        description: "Find the Square shape?",
        options: [
          {
            alphabet: "A",
            img_link: "Link",
          },
          {
            alphabet: "B",
            img_link: "Link",
          },
          {
            alphabet: "C",
            img_link: "Link",
          },
          {
            alphabet: "D",
            img_link: "Link",
          },
        ],
      },
    },

    // Vijay
    {
      question_type: "MCQ4",
      question: {
        question_title: "MCQ",
        description: "Identify the cricketer",
        question_title_img:
          "https://img.jagranjosh.com/imported/images/E/GK/sachin-records.webp",
        options: [
          {
            id: 1,
            alphabet: "A",
            option_text: "Sachin T",
          },
          {
            id: 2,
            alphabet: "B",
            option_text: "Virat Kohli",
          },
          {
            id: 3,
            alphabet: "C",
            option_text: "Nelson Mandela",
          },
          {
            id: 4,
            alphabet: "D",
            option_text: "Rahul Gandhi",
          },
        ],
      },
    },

    // Jeev
    {
      question_type: "MCQ5",
      question: {
        question_title: "MCQ",
        description: "Identify the cricketer",
        question_title_img: "Link",
        options: [
          {
            alphabet: "A",
            option_text: "Sachin T",
            img_link: "Link",
          },
          {
            alphabet: "B",
            option_text: "Virat Kohli",
            img_link: "Link",
          },
          {
            alphabet: "C",
            option_text: "Nelson Mandela",
            img_link: "Link",
          },
          {
            alphabet: "D",
            option_text: "Rahul Gandhi",
            img_link: "Link",
          },
        ],
      },
    },
    // Jeev
    {
      question_type: "Match The Following",
      question: {
        question_title: "Match The Following",
        description: "Match the spelling with their pictures",
        img_options: [
          {
            id: 1,
            img_link: "Link",
            answer_id: 1,
          },
          {
            id: 2,
            img_link: "Link",
            answer_id: 2,
          },
          {
            id: 3,
            img_link: "Link",
            answer_id: 3,
          },
          {
            id: 4,
            img_link: "Link",
            answer_id: 4,
          },
        ],
        answer_options: [
          {
            id: 1,
            option_text: "Cat",
          },
          {
            id: 2,
            option_text: "Bird",
          },
          {
            id: 3,
            option_text: "Dog",
          },
          {
            id: 4,
            option_text: "Apple",
          },
        ],
      },
    }, // Vijay
    {
      question_type: "Flashcards",
      question: {
        question_title: "Flashcards",
        description: "Which is the largest living land mammal?",
        hint: `Lorem Ipsum is simply dummy text of the printing and typesetting industry .

                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                
                Lorem Ipsum is simply dummy text of`,
        fact: "Lorem Ipsum is simply dummy text of the printing and typesetting industry .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry .Lorem Ipsum is simply.",
        img_options: [
          {
            id: 1,
            img_link: "Link",
            answer_id: false,
          },
          {
            id: 2,
            img_link: "Link",
            answer_id: false,
          },
          {
            id: 3,
            img_link: "Link",
            answer_id: true,
          },
          {
            id: 4,
            img_link: "Link",
            answer_id: false,
          },
        ],
      },
    },
  ];

  // const MUMBLE_JUMBLE = "Mumble Jumble";
  const FLASHCARDS = "Flashcards";
  const QUESTION_MCQ1 = "MCQ1";
  const QUESTION_MCQ2 = "MCQ2";
  const QUESTION_MCQ3 = "MCQ3";
  const QUESTION_MCQ4 = "MCQ4";
  const QUESTION_MCQ5 = "MCQ5";
  const MATCH_THE_FOLLOWING = "Match The Following";

  const [tabIndex, setTabIndex] = useState(0);

  const renderComponent = () => {
    return data?.map((d, i) => {
      switch (d.question_type) {
        // case MUMBLE_JUMBLE:
        //     return (
        //         <Box p={0} key={d.question_type}>
        //             <MumbleJumble
        //                 data={d.question}
        //                 questionNumber={i}
        //                 current={current}
        //                 totalQuestionLength={
        //                     data.length
        //                 }
        //             />
        //         </Box>
        //     );
        case MATCH_THE_FOLLOWING:
          return (
            <Box p={0} key={d.question_type}>
              <Match
                data={d.question}
                questionNumber={i}
                current={current}
                totalQuestionLength={data?.length}
              />
            </Box>
          );
        case FLASHCARDS:
          return (
            <Box p={0} key={d.question_type}>
              <FlashCard
                data={d.question}
                questionNumber={i}
                current={current}
                next={next}
                totalQuestionLength={data?.length}
              />
            </Box>
          );
        case QUESTION_MCQ1:
          return (
            <Box p={0} key={d.question_type}>
              <MCQ1
                data={d.question}
                questionNumber={i}
                current={current}
                totalQuestionLength={data?.length}
              />
            </Box>
          );
        case QUESTION_MCQ2:
          return (
            <Box p={0} key={d.question_type}>
              <MCQ2
                data={d.question}
                questionNumber={i}
                current={current}
                totalQuestionLength={data?.length}
              />
            </Box>
          );
        case QUESTION_MCQ3:
          return (
            <Box p={0} key={d.question_type}>
              <MCQ3
                data={d.question}
                questionNumber={i}
                current={current}
                totalQuestionLength={data?.length}
              />
            </Box>
          );
        case QUESTION_MCQ4:
          return (
            <Box p={0} key={d.question_type}>
              <MCQ4
                data={d.question}
                questionNumber={i}
                current={current}
                totalQuestionLength={data?.length}
              />
            </Box>
          );
        case QUESTION_MCQ5:
          return (
            <Box p={0} key={d.question_type}>
              <MCQ5
                data={d.question}
                questionNumber={i}
                current={current}
                totalQuestionLength={data?.length}
              />
            </Box>
          );
        default:
          return null;
      }
    });
  };

  const [swiper, setSwiper] = useState(null);
  const sliderRef = useRef();
  // const [changeSlide , setChangeSlide] = useState(0)
  const [current, setCurrentPage] = useState(0);
  const [currentPageBg, setCurrentPageBg] = useState("#F77783");

  const params = {
    onSwiper: setSwiper,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + "</span>";
      },
    },
    // navigation: {
    // nextEl: '.swiper-button-next',
    // prevEl: '.swiper-button-prev',
    // },
  };

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    // initialSlide: changeSlide,
    slidesToScroll: 1,
    infinite: false,
    afterChange: (index) => setCurrentPage(index),
    appendDots: (dots) => {
      return (
        <HStack
          position="absolute"
          justifyContent={"center"}
          left="50%"
          bottom="5%"
          transform="translateX(-50%)"
          alignItems="center"
        >
          <ChevronLeftIcon
            boxSize={6}
            borderRadius={"full"}
            bg={currentPageBg}
            color={"white"}
            onClick={previous}
          />
          <HStack>
            {dots.map((dot, index) => {
              return (
                <Circle
                  key={dot.key}
                  onClick={() => handleDotClick(index)}
                  width={2}
                  height={2}
                  border={
                    dot.props.className === "slick-active" &&
                    `2px solid ${currentPageBg}`
                  }
                  backgroundColor={
                    dot.props.className === "slick-active"
                      ? "none"
                      : currentPageBg
                  }
                  marginX="2px"
                  _hover={{ backgroundColor: "gray.300" }}
                />
              );
            })}
          </HStack>
          <ChevronRightIcon
            boxSize={6}
            borderRadius={"full"}
            bg={currentPageBg}
            color={"white"}
            onClick={next}
          />
        </HStack>
      );
    },
  };

  let flag = 0;
  const bgColorByQuestion = () => {
    // if (data[flag ? current : current + 1].question_type === MUMBLE_JUMBLE) {
    //     setCurrentPageBg('red')
    //     flag = 1
    // } else
    if (
      data[flag ? current : current + 1].question_type === MATCH_THE_FOLLOWING
    ) {
      setCurrentPageBg("#3AB783");
      flag = 1;
    } else if (
      data[flag ? current : current + 1].question_type === FLASHCARDS
    ) {
      setCurrentPageBg("#00A6DC");
      flag = 1;
    } else if (
      data[flag ? current : current + 1].question_type === QUESTION_MCQ1
    ) {
      setCurrentPageBg("#F77783");
      flag = 1;
    } else if (
      data[flag ? current : current + 1].question_type === QUESTION_MCQ2
    ) {
      setCurrentPageBg("#F77783");
      flag = 1;
    } else if (
      data[flag ? current : current + 1].question_type === QUESTION_MCQ3
    ) {
      setCurrentPageBg("#F77783");
      flag = 1;
    } else if (
      data[flag ? current : current + 1].question_type === QUESTION_MCQ4
    ) {
      setCurrentPageBg("#F77783");
      flag = 1;
    } else if (
      data[flag ? current : current + 1].question_type === QUESTION_MCQ5
    ) {
      setCurrentPageBg("#F77783");
      flag = 1;
    }
  };

  function pauseSpeech() {
    window.speechSynthesis.cancel();
  }

  const next = () => {
    sliderRef.current.slickNext();
    bgColorByQuestion();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
    bgColorByQuestion();
  };

  const handleDotClick = (index) => {
    sliderRef.current.slickGoTo(index);
  };

  useEffect(() => {
    pauseSpeech();
  }, [current]);

  return (
    // <>
    //   <Swiper {...params}>{renderComponent()}</Swiper>
    //   {swiper && (
    //     <>
    //       <Box className="swiper-pagination"></Box>
    //       {/* <Box className='swiper-button-prev'></Box> */}
    //       {/* <Box className='swiper-button-next'></Box> */}
    //     </>
    //   )}
    // </>

    <Box m="auto" position={"relative"} h={"100vh"}>
      <Slider {...settings} ref={sliderRef}>
        {renderComponent()}
      </Slider>
    </Box>
  );
};

export default Home;

// import React, { useEffect, useRef, useState } from 'react';
// import { Box, Button, Circle, HStack, IconButton } from '@chakra-ui/react';
// import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import learningMockData from "../api_data/LearninData";
// import FlashCard from "./FlashCard";
// import Match from "./Match";
// import MCQ1 from "./MCQ1";
// import MCQ2 from "./MCQ2";
// import MCQ3 from "./MCQ3";
// import MCQ4 from "./MCQ4";
// import MCQ5 from "./MCQ5";
// import MumbleJumble from "./MumbleJumble";
// import "../App.css"
// import useTextToSpeech from '../hooks/useTextToSpeech';

// const Carousel = () => {

//   const data = learningMockData();

//   const MUMBLE_JUMBLE = 'Mumble Jumble';
// 	const MATCH_THE_FOLLOWING = 'Match The Following';
// 	const FLASHCARDS = 'Flashcards';
// 	const QUESTION_MCQ1 = 'MCQ1';
// 	const QUESTION_MCQ2 = 'MCQ2';
// 	const QUESTION_MCQ3 = 'MCQ3';
// 	const QUESTION_MCQ4 = 'MCQ4';
// 	const QUESTION_MCQ5 = 'MCQ5';

// const sliderRef = useRef();
// // const [changeSlide , setChangeSlide] = useState(0)
// const [current,setCurrentPage] = useState(0)
// const [currentPageBg,setCurrentPageBg] = useState();
// const [playSpeech, pauseSpeech , isPlaying] = useTextToSpeech();

// let flag = 0;
// const bgColorByQuestion = () => {

//     if (data[flag ? current : current + 1].question_type === MUMBLE_JUMBLE) {
//         setCurrentPageBg('red')
//         flag = 1
//     } else if (data[flag ? current : current + 1].question_type === MATCH_THE_FOLLOWING) {
//         setCurrentPageBg('#3AB783')
//         flag = 1
//     } else if (data[flag ? current : current + 1].question_type === FLASHCARDS) {
//         setCurrentPageBg('#00A6DC')
//         flag = 1
//     } else if (data[flag ? current : current + 1].question_type === QUESTION_MCQ1) {
//         setCurrentPageBg('#F77783')
//         flag = 1
//     } else if (data[flag ? current : current + 1].question_type === QUESTION_MCQ2) {
//         setCurrentPageBg('#F77783')
//         flag = 1
//     } else if (data[flag ? current : current + 1].question_type === QUESTION_MCQ3) {
//         setCurrentPageBg('#F77783')
//         flag = 1
//     } else if (data[flag ? current : current + 1].question_type === QUESTION_MCQ4) {
//         setCurrentPageBg('#F77783')
//         flag = 1
//     } else if (data[flag ? current : current + 1].question_type === QUESTION_MCQ5) {
//         setCurrentPageBg('#F77783')
//         flag = 1
//     }

// }

//     useEffect(() => {pauseSpeech()},[current])

// const next = () => {
//   sliderRef.current.slickNext();
//   bgColorByQuestion()
// };

// const previous = () => {
//   sliderRef.current.slickPrev();
//   bgColorByQuestion()
// };

// const handleDotClick = (index) => {
//   sliderRef.current.slickGoTo(index);
// };

//   useEffect(()=> {bgColorByQuestion()},[])

//   const renderComponent = () => {
//     return data?.map((d, i) => {
//         switch (d.question_type) {
//             case MUMBLE_JUMBLE:
//                 return (
//                     <Box p={0} key={d.question_type}>
//                         <MumbleJumble
//                             data={d.question}
//                             questionNumber={i}
//                             current={current}
//                             totalQuestionLength={
//                                 data.length
//                             }
//                         />
//                     </Box>
//                 );
//             case MATCH_THE_FOLLOWING:
//                 return (
//                     <Box p={0} key={d.question_type}>
//                         <Match
//                             data={d.question}
//                             questionNumber={i}
//                             current={current}
//                             totalQuestionLength={
//                                 data?.length
//                             }
//                         />
//                     </Box>
//                 );
//             case FLASHCARDS:
//                 return (
//                     <Box p={0} key={d.question_type}>
//                         <FlashCard
//                             data={d.question}
//                             questionNumber={i}
//                             current={current}
//                             next={next}
//                             totalQuestionLength={
//                                 data?.length
//                             }

//                         />
//                     </Box>
//                 );
//             case QUESTION_MCQ1:
//                 return (
//                     <Box p={0} key={d.question_type}>
//                         <MCQ1
//                             data={d.question}
//                             questionNumber={i}
//                             current={current}
//                             totalQuestionLength={
//                                 data?.length
//                             }
//                         />
//                     </Box>
//                 );
//             case QUESTION_MCQ2:
//                 return (
//                     <Box p={0} key={d.question_type}>
//                         <MCQ2
//                             data={d.question}
//                             questionNumber={i}
//                             current={current}
//                             totalQuestionLength={
//                                 data?.length
//                             }
//                         />
//                     </Box>
//                 );
//             case QUESTION_MCQ3:
//                 return (
//                     <Box p={0} key={d.question_type}>
//                         <MCQ3
//                             data={d.question}
//                             questionNumber={i}
//                             current={current}
//                             totalQuestionLength={
//                                 data?.length
//                             }
//                         />
//                     </Box>
//                 );
//             case QUESTION_MCQ4:
//                 return (
//                     <Box p={0} key={d.question_type}>
//                         <MCQ4
//                             data={d.question}
//                             questionNumber={i}
//                             current={current}
//                             totalQuestionLength={
//                                 data?.length
//                             }
//                         />
//                     </Box>
//                 );
//             case QUESTION_MCQ5:
//                 return (
//                     <Box p={0} key={d.question_type}>
//                         <MCQ5
//                             data={d.question}
//                             questionNumber={i}
//                             current={current}
//                             totalQuestionLength={
//                                 data?.length
//                             }
//                         />
//                     </Box>
//                 );
//             default:
//                 return null;
//         }
//     })
//     }

// const settings = {
//   dots: true,
//   speed: 500,
//   slidesToShow: 1,
//   // initialSlide: changeSlide,
//   slidesToScroll: 1,
//   infinite: false,
//   afterChange: (index) => setCurrentPage(index),
//   appendDots: (dots) => {
//    return <HStack
//         position="absolute"
//         justifyContent={'center'}
//         left='50%'
//         bottom='3%'
//         transform="translateX(-50%)"
//         alignItems="center"
//       >
//         <ChevronLeftIcon boxSize={8} borderRadius={'full'} bg={currentPageBg} color={'white'} onClick={previous} />
//         <HStack>
//       {dots.map((dot, index) => {
//         return <Circle
//           key={dot.key}
//           onClick={() => handleDotClick(index)}
//           width={3}
//           height={3}
//           border={dot.props.className === 'slick-active' && `2px solid ${currentPageBg}`}
//           backgroundColor={dot.props.className === 'slick-active' ? 'none' : currentPageBg}
//           marginX="2px"
//           _hover={{ backgroundColor: 'gray.300' }}
//         />
//   })}
//     </HStack>
//         <ChevronRightIcon boxSize={8} borderRadius={'full'} bg={currentPageBg} color={'white'} onClick={next}/>
//       </HStack>
//   }
// };

//   return (
//     <Box m="auto" position={'relative'} border={'1px solid red'} h={'100vh'}>
//       <Slider {...settings} ref={sliderRef}>
//         {renderComponent()}
//       </Slider>
//     </Box>
//   );
// };

// export default Carousel;
