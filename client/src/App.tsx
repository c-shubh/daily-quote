import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function ArrowButton(props: { direction: "left" | "right" }) {
  return (
    <button type="button" className="block border rounded px-2">
      {props.direction == "left" ? <FiChevronLeft /> : <FiChevronRight />}
    </button>
  );
}

export default function App() {
  const [date, setDate] = useState(dayjs());
  const [quote, setQuote] = useState(
    null as unknown as {
      topic: string;
      text: string;
    }
  );

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/${date.format("MMMM")}/${date.format("D")}`);
      const quote_resp = await response.json();
      setQuote(quote_resp);
    }
    fetchData();
  }, []);

  function nextDate() {
    setDate(date.add(1, "day"));
  }
  function previousDate() {
    setDate(date.subtract(1, "day"));
  }

  return (
    <div className="prose mx-6 py-6 flex flex-col space-y-4 h-full">
      <h2 className="text-center border rounded-lg p-2 mb-0">Daily Quote</h2>
      <div className="border rounded-lg flex justify-between p-2">
        <ArrowButton direction="left" />
        <span className="font-bold">{date.format("D MMMM")}</span>
        <ArrowButton direction="right" />
      </div>
      <div className="border rounded-lg p-4 flex-grow-1 h-fit overflow-auto">
        <h4 className="mt-0 text-center">{!quote ? "" : quote.topic}</h4>
        <p className="mb-0">{!quote ? "" : quote.text}</p>
      </div>
    </div>
  );
}
