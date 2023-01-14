import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function ArrowButton(props: { direction: "left" | "right"; onClick?: any }) {
  return (
    <button type="button" className="block border rounded px-2" onClick={props.onClick}>
      {props.direction == "left" ? <FiChevronLeft /> : <FiChevronRight />}
    </button>
  );
}
