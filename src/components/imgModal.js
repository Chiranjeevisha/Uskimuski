import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Img,
} from "@chakra-ui/react";

const ImgModal = ({ isOpen, onClose, imgLink }) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay backdropFilter="blur(2px)" />
        <ModalContent width={"80%"} borderRadius={25}>
          <Img src={imgLink} borderRadius={25} />
        </ModalContent>
      </Modal>
    </>
  );
};

export default ImgModal;
