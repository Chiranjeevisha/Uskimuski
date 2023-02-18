function learningMockData() {
  const learningData = [
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
    },

    // Vijay
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
  ];

  return learningData;
}

export default learningMockData;
