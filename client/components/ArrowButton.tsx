import type { MouseEventHandler } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface ArrowButtonProps {
  direction: "left" | "right";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function ArrowButton(props: ArrowButtonProps) {
  return (
    <button type="button" className="block border rounded px-2" onClick={props.onClick}>
      {props.direction == "left" ? <FiChevronLeft /> : <FiChevronRight />}
    </button>
  );
}
