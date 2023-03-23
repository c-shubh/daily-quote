import dayjs from "dayjs";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import "react-day-picker/dist/style.css";
import { CSSTransition } from "react-transition-group";
import ArrowButton from "../components/ArrowButton";
import DayPickerDialog from "../components/DayPickerDialog";
import InfoModal from "../components/InfoModal";
import type { Quote } from "../types";

/* Fetch quote for given `date` from db */
async function fetchQuote(date: dayjs.Dayjs): Promise<Quote> {
  const month = date.format("MMMM");
  const dateOfMonth = date.format("D");
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${month}/${dateOfMonth}`);
  const quote_resp = await response.json();
  return quote_resp;
}

export default function Home() {
  /* --------------------------- State variables ---------------------------- */

  /* Store date of currently visible quote */
  const [date, setDate] = useState(dayjs());

  /* Quote as returned from db */
  const [quote, setQuote] = useState<Quote>();

  /* Used for quote transitions */
  const [quoteVisible, setQuoteVisible] = useState(true);
  const quoteDivRef = useRef(null);
  const [loadingHidden, setLoadingHidden] = useState(true);

  /* ------------------------------ Functions ------------------------------- */
  useEffect(() => {
    async function asyncInsideUseEffect() {
      setLoadingHidden(false);
      setQuoteVisible(false);
      setQuote(await fetchQuote(date));
      setLoadingHidden(true);
      setQuoteVisible(true);
    }
    asyncInsideUseEffect();
  }, [date]);

  function nextDate() {
    setDate(date.add(1, "day"));
  }
  function previousDate() {
    setDate(date.subtract(1, "day"));
  }

  /* --------------------------------- JSX ---------------------------------- */
  return (
    <>
      <Head>
        <title>Daily Quote</title>
      </Head>

      <div className="prose mx-6 py-6 flex flex-col space-y-4 h-full sm:mx-auto">
        <h2 className="relative text-center border rounded-lg p-2 m-0">
          Daily Quote
          <InfoModal />
        </h2>
        <div className="border rounded-lg flex justify-between p-2">
          <ArrowButton direction="left" onClick={() => previousDate()} />
          <DayPickerDialog date={date} setDate={(d: any) => setDate(dayjs(d))} />
          <ArrowButton direction="right" onClick={() => nextDate()} />
        </div>
        <div className="border rounded-lg p-4 flex-grow-1 h-fit overflow-auto">
          <div className={`${loadingHidden ? "hidden" : ""} text-center`}>Loading...</div>
          {quote && (
            <CSSTransition
              nodeRef={quoteDivRef}
              key={quote?._id}
              timeout={250}
              classNames="fade"
              in={quoteVisible}
              appear={true}
              unmountOnExit={true}
            >
              <div ref={quoteDivRef} className="bg-white z-10">
                <h4 className="mt-0 text-center">{quote?.topic}</h4>
                <p className="mb-0">{quote?.text}</p>
              </div>
            </CSSTransition>
          )}
        </div>
      </div>
    </>
  );
}
