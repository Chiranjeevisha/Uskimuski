import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  Circle,
  Box,
  Center,
  Flex,
  VStack,
  Img,
  HStack,
  useBoolean,
} from "@chakra-ui/react";
// import OrangeRedSpeaker from "../assets/OrangeRedSpeaker.svg";
import speakerIcon from "../assets/svg/speakerIconPink.svg";
import pauseIcon from "../assets/svg/pause-buttonPink.svg";
// import OrangeRedLanguage from "../assets/OrangeRedLanguage.svg";

const FlashcardErrorModal = ({ isOpen, onClose, type }) => {
  const errorText = [
    "It's correct but your selected it as wrong.",
    "It's Wrong but your selected it as Correct.",
    // "It's Correct",
  ];

  const [isPlaying, ipState] = useBoolean(false);

  function textToSpeech(text, voice = 2) {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      ipState.off();
    }
    const speech = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();
    speech.voice = voices[voice];
    window.speechSynthesis.speak(speech);
    ipState.on();
    speech.onend = () => ipState.off();
  }

  function pauseSpeech() {
    window.speechSynthesis.cancel();
    ipState.off();
  }

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        blockScrollOnMount={true}
        size={"lg"}
        isCentered
      >
        <ModalOverlay />
        <ModalContent m={10} borderRadius={"20"} bg={"#FFF364"}>
          <Center my={-1}>
            <ModalHeader fontSize={20} fontWeight={500}>
              Update
            </ModalHeader>
          </Center>
          <ModalCloseButton
            color={"white"}
            size={"lg"}
            fontSize={"16"}
            fontWeight={"bold"}
          />
          <ModalBody
            bg={"white"}
            boxShadow={"dark-lg"}
            color={"black"}
            fontSize={15}
            fontWeight={500}
            mb={5}
            minH={200}
            borderRadius={20}
          >
            <VStack mb={3}>
              <HStack justifyContent={"end"} width={"100%"}>
                {/* <Img src={pauseIcon} />  Language Icon needs to be here */}
                <Img
                  src={!isPlaying ? speakerIcon : pauseIcon}
                  onClick={() =>
                    !isPlaying ? textToSpeech(errorText[type]) : pauseSpeech()
                  }
                />
              </HStack>
              <Box>
                <Text>{errorText[type]}</Text>
              </Box>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FlashcardErrorModal;
