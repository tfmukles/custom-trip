import { IFormData } from "@/types";
import { useEffect, useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

type props = IFormData & {
  updateFields: (fields: Partial<any>) => void;
  isError: boolean;
};

const Dates = ({ updateFields, dates, isError }: props) => {
  const [render, setRender] = useState(false);
  const [state, setState] = useState([
    {
      startDate: dates.startDate ? new Date(dates.startDate) : new Date(),
      endDate: dates.endDate ? new Date(dates.endDate) : new Date(),
      key: "selection",
    },
  ]);

  useEffect(() => {
    const { endDate, startDate } = state[0];
    if (render) {
      updateFields({
        dates: {
          startDate,
          endDate,
        },
      });
    }
  }, [state]);

  useEffect(() => {
    setRender(true);
  }, []);

  const { startDate, endDate } = state[0];

  return (
    <>
      {isError && (
        <p className="bg-red-300 p-3 rounded mb-5 text-dark">
          Please complete this field so we can find the best Trip Designers for
          you.
        </p>
      )}
      <input
        type="hidden"
        name="startDate"
        value={startDate.toLocaleDateString()}
      />
      <input
        type="hidden"
        name="endDate"
        value={endDate.toLocaleDateString()}
      />
      <h2 className="section-title-sm">When would you like to travel?</h2>
      <DateRangePicker
        onChange={(item: any) => {
          setState([item.selection]);
        }}
        months={2}
        ranges={state}
        direction="horizontal"
        className="dates-picker"
      />
    </>
  );
};

export default Dates;
