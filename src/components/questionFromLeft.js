import {
  Box,
  Center,
  Flex,
  HStack,
  Img,
  Text,
  useBoolean,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Sachin from "../assets/images/Sachin.png";
import ImgModal from "./imgModal";
// import RedSpeaker from '../assets/RedSpeaker.svg';

const QuestionFromLeft = (props) => {
  const {
    border,
    questionNoBg,
    questionColor,
    questionNo,
    question,
    questionImg,
    totalQuestionLength,
    bg,
  } = props;

  const [showImgModal, setShowImgModal] = useBoolean(false);

  return (
    <>
      <Box
        position={"relative"}
        border={border || "1px solid white"}
        w={"90%"}
        m={1}
        mt={5}
        ml={0}
        p={1}
        pl={2}
        borderEndRadius={"full"}
        backgroundColor={bg || "#F77783"}
      >
        <Box
          position={"absolute"}
          bottom={"85%"}
          border={"1px solid white"}
          borderRadius={50}
          w={160}
          ml={3}
          backgroundColor={questionNoBg || "#FFF364"}
        >
          <Center>
            <Text color={questionColor || "#F77783"} fontSize={"sm"}>
              {`Question ${questionNo + 1} of ${totalQuestionLength}`}
            </Text>
          </Center>
        </Box>
        <HStack>
          <Box w={"100%"} p={3}>
            <Text color={"white"} fontSize={"sm"} w={"90%"}>
              {question || "Question Here..."}
            </Text>
          </Box>
          {questionImg && (
            <Img
              src={Sachin}
              border={"3px solid white"}
              borderRadius={"full"}
              onClick={() => setShowImgModal.on()}
            />
          )}
        </HStack>

        <ImgModal
          isOpen={showImgModal}
          onClose={setShowImgModal.off}
          imgLink={questionImg}
        />
      </Box>
    </>
  );
};

export default QuestionFromLeft;
