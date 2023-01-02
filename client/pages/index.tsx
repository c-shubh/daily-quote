import dayjs from "dayjs";
import Head from "next/head";
import { useEffect, useState } from "react";
import { DayPicker, SelectSingleEventHandler } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function ArrowButton(props: { direction: "left" | "right"; onClick?: any }) {
  return (
    <button type="button" className="block border rounded px-2" onClick={props.onClick}>
      {props.direction == "left" ? <FiChevronLeft /> : <FiChevronRight />}
    </button>
  );
}

function DayPickerDialog(props: {
  selected: Date;
  onSelect: SelectSingleEventHandler;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const mapping = { true: "", false: "hidden" };
  return (
    <div
      className={`absolute inset-0 bg-[hsl(0deg_0%_0%_/_80%)] flex justify-center grid grid-rows-4 ${
        mapping[`${props.open}`]
      }`}
      onClick={() => props.setOpen(!props.open)}
    >
      <div onClick={(e) => e.stopPropagation()} className="row-start-2">
        <DayPicker
          mode="single"
          selected={props.selected}
          onSelect={props.onSelect}
          className="bg-white border rounded p-4 shadow-md"
          onDayClick={() => props.setOpen(false)}
        />
      </div>
    </div>
  );
}

/* Fetch quote for given `date` from db */
async function fetchQuote(date: dayjs.Dayjs) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${date.format("MMMM")}/${date.format("D")}`);
  const quote_resp = await response.json();
  return quote_resp;
}

export default function Home() {
  /* Store date of currently visible quote */
  const [date, setDate] = useState(dayjs());

  /* Quote as returned from db */
  const [quote, setQuote] = useState(
    null as unknown as {
      topic: string;
      text: string;
    }
  );

  const [dialogOpen, setDialogOpen] = useState(false);

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
    <>
      <Head>
        <title>Daily Quote</title>
      </Head>
      <DayPickerDialog
        selected={date.toDate()}
        onSelect={(d) => setDate(dayjs(d))}
        open={dialogOpen}
        setOpen={setDialogOpen}
      />
      <div className="prose mx-6 py-6 flex flex-col space-y-4 h-full">
        <h2 className="text-center border rounded-lg p-2 m-0">Daily Quote</h2>
        <div className="border rounded-lg flex justify-between p-2">
          <ArrowButton direction="left" onClick={() => previousDate()} />
          <button
            type="button"
            className="font-bold"
            onClick={() => {
              setDialogOpen(!dialogOpen);
            }}
          >
            {date.format("D MMMM")}
          </button>
          <ArrowButton direction="right" onClick={() => nextDate()} />
        </div>
        <div className="border rounded-lg p-4 flex-grow-1 h-fit overflow-auto">
          <h4 className="mt-0 text-center">{!quote ? "" : quote.topic}</h4>
          <p className="mb-0">{!quote ? "" : quote.text}</p>
        </div>
      </div>
    </>
  );
}