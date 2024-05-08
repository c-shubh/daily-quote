import { Dispatch, SetStateAction } from "react";
import { DayPicker } from "react-day-picker";

import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import dayjs from "dayjs";

interface DayPickerDialogProps {
  date: dayjs.Dayjs;
  setDate: Dispatch<SetStateAction<dayjs.Dayjs>>;
}

export default function DayPickerDialog(props: DayPickerDialogProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button type="button" className="font-bold" onClick={onOpen}>
        {props.date.format("D MMMM")}
      </button>

      <Modal isOpen={isOpen} onClose={onClose} size="xs">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Select Date</ModalHeader>
          <ModalCloseButton />
          <ModalBody className="">
            <DayPicker
              mode="single"
              selected={props.date.toDate()}
              onSelect={(d: any) => props.setDate(dayjs(d))}
              onDayClick={onClose}
              className="!m-0"
            />
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => {
                props.setDate(dayjs());
                onClose();
              }}
            >
              Today
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
