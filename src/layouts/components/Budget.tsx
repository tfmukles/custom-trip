import { IFormData } from "@/types";

type props = IFormData & {
  updateFields: (fields: Partial<any>) => void;
  isError: boolean;
};

const CHILD = 100;
const ADULTS = 300;

const Budget = ({
  updateFields,
  budget,
  dates,
  isError,
  location,
  travelers,
}: props) => {
  const startDate: any = new Date(dates.startDate);
  const endDate: any = new Date(dates.endDate);
  const timeDifference = (endDate - startDate) / (1000 * 60 * 60 * 24);

  return (
    <>
      {isError && (
        <p className="bg-red-300 p-3 rounded mb-5 text-dark">
          Please complete this field so we can find the best Trip Designers for
          you.
        </p>
      )}
      <h2 className="section-title-sm">
        What is a comfortable budget range for this trip, excluding flights?
      </h2>
      <p className="section-desc">
        We understand you might not have an exact budget at this point and
        that&apos;s okay. We&apos;re here to help!
      </p>
      <p className="section-desc">
        <b className="text-base">
          Average budget for{" "}
          <span className="text-dark">
            {parseInt(travelers.adults) + parseInt(travelers.children)}
          </span>{" "}
          travelers for {timeDifference} days in {location.name}: $
          {timeDifference *
            (parseInt(travelers.adults) * ADULTS +
              parseInt(travelers.children) * CHILD)}
          +
        </b>
      </p>
      <div className="flex space-x-4 items-center">
        <div className="">
          <label className="block mb-3">From</label>
          <select
            name="form"
            value={budget.form}
            onChange={(e) =>
              updateFields({
                budget: {
                  ...budget,
                  form: e.target.value,
                },
              })
            }
          >
            <option value={""}>From</option>
            <option value={"1000"}>$1000</option>
            <option value={"2000"}>$2000</option>
            <option value={"3000"}>$3000</option>
            <option value={"4000"}>$4000</option>
            <option value={"5000"}>$5000</option>
          </select>
        </div>
        <div className="">
          <label className="block mb-3">To</label>
          <select
            name="to"
            value={budget.to}
            onChange={(e) =>
              updateFields({
                budget: {
                  ...budget,
                  to: e.target.value,
                },
              })
            }
          >
            <option value={""}>To</option>
            <option value={"1000"}>$1000</option>
            <option value={"2000"}>$2000</option>
            <option value={"3000"}>$3000</option>
            <option value={"4000"}>$4000</option>
            <option value={"5000"}>$5000</option>
          </select>
        </div>
      </div>
      <p className="text-sm font-bold text-dark mt-3">
        How do we calculate your average budget?
      </p>
    </>
  );
};

export default Budget;
