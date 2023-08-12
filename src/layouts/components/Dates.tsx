import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const initialState = {
  startDate: new Date(),
  endDate: new Date(),
};

type state = typeof initialState;

const Dates = () => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <>
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
