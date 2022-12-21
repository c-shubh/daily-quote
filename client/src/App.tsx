import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function ArrowButton(props: { direction: "left" | "right"; onClick?: any }) {
  return (
    <button type="button" className="block border rounded px-2" onClick={props.onClick}>
      {props.direction == "left" ? <FiChevronLeft /> : <FiChevronRight />}
    </button>
  );
}

/* Fetch quote for given `date` from db */
async function fetchQuote(date: dayjs.Dayjs) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/${date.format("MMMM")}/${date.format("D")}`);
  const quote_resp = await response.json();
  return quote_resp;
}

export default function App() {
  /* Store date of currently visible quote */
  const [date, setDate] = useState(dayjs());

  /* Quote as returned from db */
  const [quote, setQuote] = useState(
    null as unknown as {
      topic: string;
      text: string;
    }
  );

  useEffect(() => {
    async function asyncInsideUseEffect() {
      setQuote(await fetchQuote(date));
    }
    asyncInsideUseEffect();
  }, [date]);

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
        <ArrowButton direction="left" onClick={() => previousDate()} />
        <span className="font-bold">{date.format("D MMMM")}</span>
        <ArrowButton direction="right" onClick={() => nextDate()} />
      </div>
      <div className="border rounded-lg p-4 flex-grow-1 h-fit overflow-auto">
        <h4 className="mt-0 text-center">{!quote ? "" : quote.topic}</h4>
        <p className="mb-0">{!quote ? "" : quote.text}</p>
      </div>
    </div>
  );
}
