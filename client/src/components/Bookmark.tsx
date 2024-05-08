import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";
import { load, store } from "../bookmarksStore";

export default function BookmarkButton({ date }: { date: dayjs.Dayjs }) {
  const key = date.format("MMMM D");
  const [b, setB] = useState(false);

  useEffect(() => {
    // if key isn't stored, and we're setting false, then don't set anything
    // TODO: not optimal though, since we need to read local storage every time
    if (!!!load()[key] && !b) return;
    store(key, b);
  }, [b]);

  useEffect(() => {
    setB(!!load()[key]);
  }, [key]);

  return (
    <button
      className="absolute right-16 top-0 bottom-0 flex items-center text-slate-400"
      onClick={() => {
        setB(!b);
      }}
    >
      {b ? <BsStarFill /> : <BsStar />}
    </button>
  );
}
