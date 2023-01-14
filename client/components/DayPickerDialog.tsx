import { DayPicker, SelectSingleEventHandler } from "react-day-picker";
export default function DayPickerDialog(props: {
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
