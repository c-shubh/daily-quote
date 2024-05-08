import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { BsInfoCircle } from "react-icons/bs";

export default function InfoModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button type="button" className="absolute right-5 top-0 bottom-0 flex items-center" onClick={onOpen}>
        <BsInfoCircle className="block w-5 h-5 text-slate-400" />
      </button>

      <Modal isOpen={isOpen} onClose={onClose} size="xs">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Info</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="prose text-center">
            <p>
              <a href="https://github.com/c-shubh/daily-quote">Source code on GitHub</a>
            </p>
            <p>
              Quotes sourced from <em>Daily Inspiration From The Monk Who Sold His Ferrari by Robin Sharma</em>
            </p>
            <p>Made with ❤ by Shubh A Chudasama</p>
          </ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
