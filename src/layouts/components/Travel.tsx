import { IFormData } from "@/types";

type props = IFormData & {
  updateFields: (fields: Partial<any>) => void;
  isError: boolean;
};

const Travel = ({ updateFields, travelers, isError }: props) => {
  const onAgesChange = (e: React.ChangeEvent<HTMLInputElement>, node: any) => {
    const value = parseInt(e.target.value);
    const element = e.target;

    if (value > 0 && value < 18) {
      updateFields({
        travelers: {
          ...travelers,
          ages: {
            ...travelers.ages,
            [`child-${node + 1}`]: value,
          },
        },
      });
      element.nextElementSibling?.classList.remove("block");
      element.nextElementSibling?.classList.add("hidden");
      return;
    }
    element.nextElementSibling?.classList.remove("hidden");
    element.nextElementSibling?.classList.add("block");
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
      <input type="hidden" name="adults" value={travelers.adults} />
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
      <input type="hidden" name="ages" />
      {[...Array(parseInt(travelers.children))].map((_, i) => {
        return (
          <div className="mt-5" key={i}>
            <p className="text-sm text-dark mb-3">Children {i + 1} age</p>
            <input
              onChange={(e) => onAgesChange(e, i)}
              name={"ages"}
              type="number"
              className="p-3"
              placeholder="0-17"
              value={(travelers.ages as any)[`child-${i + 1}`] || 0}
            />
            <small className="hidden text-red-500 mt-2">
              child ages must be between 0 and 17
            </small>
          </div>
        );
      })}
    </>
  );
};

export default Travel;
