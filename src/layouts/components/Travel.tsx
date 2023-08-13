import { IFormData } from "@/types";

type props = IFormData & {
  updateFields: (fields: Partial<any>) => void;
  isError: boolean;
};

const Travel = ({ updateFields, travelers, isError }: props) => {
  const onAgesChange = (e: React.ChangeEvent<HTMLInputElement>, node: any) => {
    Object.entries(travelers.ages).forEach(([key, value]) => {
      if (key === node) {
        updateFields({
          travelers: {
            ...travelers,
            ages: {
              ...travelers.ages,
              [node]: {
                [e.target.name]: e.target.value,
              },
            },
          },
        });
      } else {
        updateFields({
          travelers: {
            ...travelers,
            ages: {
              ...travelers.ages,
              [key]: value,
            },
          },
        });
      }
    });
  };
  return (
    <>
      {isError && (
        <p className="bg-red-300 p-3 rounded mb-5 text-dark">
          Please complete this field so we can find the best Trip Designers for
          you.
        </p>
      )}
      <h2 className="section-title-sm">
        How many people are going on the trip?
      </h2>
      <input type="hidden" name="travelers[adults]" value={travelers.adults} />
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
      {[...Array(parseInt(travelers.children)).keys()].map((i) => {
        return (
          <div className="mt-5" key={i}>
            <p className="text-sm text-dark mb-3">Children {i + 1} age</p>
            <input
              name={`travelers[ages][${i}]`}
              type="number"
              className="p-3"
              placeholder="0-17"
              value={travelers.ages[i] || 0}
            />
            <small className="hidden text-red-500 mt-2">
              Enter children age.
            </small>
          </div>
        );
      })}
    </>
  );
};

export default Travel;
