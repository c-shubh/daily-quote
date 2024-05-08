import dayjs from "dayjs";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Home from "..";

export default function MonthDate() {
  const { query } = useRouter();
  const [date, setDate] = useState<dayjs.Dayjs>();

  useEffect(() => {
    setDate(dayjs(`${query.month} ${query.date}`));
  }, [query]);

  if (!!date) {
    return <Home date={date} />;
  }
}
