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
} from "@chakra-ui/react";
// import OrangeRedSpeaker from "../assets/OrangeRedSpeaker.svg";
import languageIcon from "../assets/svg/languageIconPink.svg";
// import OrangeRedLanguage from "../assets/OrangeRedLanguage.svg";
import speakerIcon from "../assets/svg/speakerIconPink.svg";

const ExplanationAndFactModal = ({ isOpen, onClose, data }) => {
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
              {data?.title}
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
                <Img src={languageIcon} />
                <Img src={speakerIcon} />
              </HStack>
              <Box>
                <Text>{data?.description}</Text>
              </Box>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ExplanationAndFactModal;
