import { FormData } from "@/types";

type props = FormData & {
  updateFields: (fields: Partial<any>) => void;
  isError: boolean;
};

const Travel = ({ updateFields, travelers, isError }: props) => {
  return (
    <>
      <h2 className="section-title-sm">
        How many people are going on the trip?
      </h2>
      <div className="flex space-x-4 items-center">
        <button
          type="button"
          onClick={() =>
            updateFields({
              travelers: {
                ...travelers,
                adults: parseInt(travelers.adults) - 1,
              },
            })
          }
          disabled={parseInt(travelers.adults) === 1}
          className="border border-border rounded px-6 py-1 text-xl font-bold"
        >
          -
        </button>
        <div>{travelers.adults} Adults</div>
        <button
          onClick={() =>
            updateFields({
              travelers: {
                ...travelers,
                adults: parseInt(travelers.adults) + 1,
              },
            })
          }
          type="button"
          className="border cursor-pointer border-border rounded px-6 py-1 text-xl font-bold"
        >
          +
        </button>
      </div>

      <div className="flex space-x-4 items-center mt-8">
        <button
          onClick={() =>
            updateFields({
              travelers: {
                ...travelers,
                children: parseInt(travelers.children) - 1,
              },
            })
          }
          disabled={parseInt(travelers.children) === 0}
          type="button"
          className="border border-border rounded px-6 py-1 text-xl font-bold"
        >
          -
        </button>
        <div>{travelers.children} Children</div>
        <button
          onClick={() =>
            updateFields({
              travelers: {
                ...travelers,
                children: parseInt(travelers.children) + 1,
              },
            })
          }
          type="button"
          className="border border-border rounded px-6 py-1 text-xl font-bold"
        >
          +
        </button>
      </div>

      <div className="w-full h-0.5 bg-theme-light mt-10" />
      {[...Array(parseInt(travelers.children)).keys()].map((i) => (
        <div className="mt-5" key={i}>
          <p className="text-sm text-dark mb-3">Children {i + 1} age</p>
          <input
            name={`children-${i + 1}`}
            onChange={(e) => {}}
            type="number"
            className="p-3"
            placeholder="0-17"
          />
          <small className="hidden text-red-500 mt-2">
            Enter children age.
          </small>
        </div>
      ))}
    </>
  );
};

export default Travel;
