import bird_img from "../../assets/svg/bird_img.svg";
import dog_img from "../../assets/svg/dog_img.svg";
import apple_img from "../../assets/svg/apple_img.svg";
import cat_img from "../../assets/svg/cat_img.svg";
import parrot from "../../assets/svg/parrotOption.svg";
import sparrow from "../../assets/svg/sparrowOption.svg";
import honeyBeaker from "../../assets/svg/honeyBeakerOption.svg";
import houseSparrow from "../../assets/svg/houseSparrowOption.svg";
import rectangle from "../../assets/svg/RectangleShape.svg";
import circle from "../../assets/svg/circleShape.svg";
import polygon from "../../assets/svg/PolygonShape.svg";
import star from "../../assets/svg/StarShape.svg";
import speakerIconPink from "../../assets/svg/speakerIconPink.svg";
import pauseButtonPink from "../../assets/svg/pause-buttonPink.svg";
import tennisImage from "../../assets/images/tennisImageCard.png";
import cricketImage from "../../assets/images/cricketImageCard.png";
import swimmingImage from "../../assets/images/swimmingImageCard.png";
import chessImage from "../../assets/images/chessImageCard.png";

const data = [
  {
    question_type: "Mumble Jumble",
    question: {
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      text: "AEROPLANE",
    },
  },
  {
    question_type: "MCQ",
    question: {
      question_number: "Question 2 0f 9",
      question_title: "Match The Following",
      description: "Match the spelling with their pictures",
      img_questions: [
        {
          id: 29,
          option: "A",
          img_link: bird_img,
          answer_id: 1,
          position: "left",
        },
        {
          id: 31,
          option: "B",
          img_link: dog_img,
          answer_id: 2,
          position: "left",
        },
        {
          id: 33,
          option: "C",
          img_link: apple_img,
          answer_id: 3,
          position: "left",
        },
        {
          id: 35,
          option: "D",
          img_link: cat_img,
          answer_id: 4,
          position: "left",
        },
      ],
      img_answers: [
        {
          id: 1,
          option_text: "Cat",
          position: "right",
          matching_option_id: 29,
        },
        {
          id: 2,
          option_text: "Bird",
          position: "right",
          matching_option_id: 31,
        },
        {
          id: 3,
          option_text: "Dog",
          position: "right",
          matching_option_id: 33,
        },
        {
          id: 4,
          option_text: "Apple",
          position: "right",
          matching_option_id: 35,
        },
      ],
    },
  },
  {
    question_type: "Flashcards",
    question: {
      description: "Which is the largest living land mammal?",
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
  // {
  //   question_type: "MCQ1",
  //   question: {
  //     question_title: "MCQ",
  //     description: "In Which city of the Germany is the largest port?",
  //     descriptionTwo:
  //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  //     img_options: [
  //       {
  //         id: 1,
  //         text: "Beremen",
  //         speaker_icon: speakerIconPink,
  //         pause_button: pauseButtonPink,
  //         option: "A",
  //       },
  //       {
  //         id: 2,
  //         text: "Hamburg",
  //         speaker_icon: speakerIconPink,
  //         pause_button: pauseButtonPink,
  //         option: "B",
  //       },
  //       {
  //         id: 3,
  //         text: "Norden",
  //         speaker_icon: speakerIconPink,
  //         pause_button: pauseButtonPink,
  //         option: "C",
  //       },
  //       {
  //         id: 4,
  //         text: "Baltic",
  //         speaker_icon: speakerIconPink,
  //         pause_button: pauseButtonPink,
  //         option: "D",
  //       },
  //     ],
  //   },
  // },
  {
    question_type: "MCQ1",
    question: {
      question_title: "MCQ",
      question_number: "Question 2 0f 9",
      question_description:
        "In which city of Germany is the largest port?Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      options: [
        {
          alphabet: "A",
          option_text: "Bremen",
        },
        {
          alphabet: "B",
          option_text: "Hamburg",
        },
        {
          alphabet: "C",
          option_text: "Norden",
        },
        {
          alphabet: "D",
          option_text: "Baltic",
        },
      ],
    },
  },
  {
    question_type: "MCQ2",
    question: {
      question_title: "MCQ",
      question_number: "Question 2 0f 9",
      description: "Guess the Bird Audio",
      img_options: [
        { id: 1, img_link: parrot, option: "A" },
        {
          id: 2,
          img_link: sparrow,
          option: "B",
        },
        {
          id: 3,
          img_link: honeyBeaker,
          option: "C",
        },
        {
          id: 4,
          img_link: houseSparrow,
          option: "D",
        },
      ],
    },
  },
  {
    question_type: "MCQ",
    question: {
      question_title: "MCQ",
      description: "Find the Shape",
      question_number: "Question 2 0f 9",
      img_options: [
        { id: 1, img_link: rectangle, option: "A" },
        {
          id: 2,
          img_link: circle,
          option: "B",
        },
        {
          id: 3,
          img_link: polygon,
          option: "C",
        },
        {
          id: 4,
          img_link: star,
          option: "D",
        },
      ],
    },
  },
  {
    question_type: "MCQ5",
    question: {
      question_title: "MCQ",
      question_number: "Question 2 0f 9",
      description:
        "Identify the personality and match to the sport He or She plays",
      img_options: [
        {
          id: 1,
          img_link: tennisImage,
          text: "Tennis",
          speakerIcon: speakerIconPink,
          option: "A",
        },
        {
          id: 2,
          img_link: cricketImage,
          text: "Cricket",
          speakerIcon: speakerIconPink,
          option: "B",
        },
        {
          id: 3,
          img_link: swimmingImage,
          text: "Swimming",
          speakerIcon: speakerIconPink,
          option: "C",
        },
        {
          id: 4,
          img_link: chessImage,
          text: "Chess",
          speakerIcon: speakerIconPink,
          option: "D",
        },
      ],
    },
  },
  {
    question_type: "MCQ4",
    question: {
      question_title: "MCQ",
      description: "Identify the cricketer",
      question_title_img:
        "https://img.jagranjosh.com/imported/images/E/GK/sachin-records.webp",
      options: [
        {
          alphabet: "A",
          option_text: "Sachin T",
        },
        {
          alphabet: "B",
          option_text: "Virat Kohli",
        },
        {
          alphabet: "C",
          option_text: "Nelson Mandela",
        },
        {
          alphabet: "D",
          option_text: "Rahul Gandhi",
        },
      ],
    },
  },
];
export default data;
