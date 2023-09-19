import { IFormData } from "@/types";

type props = IFormData & {
  updateFields: (fields: Partial<any>) => void;
  isError: boolean;
};

const vibes = ["Art & Culture", "Romantic", "Chill", "Fast-paced", "Party"];

const Extra = ({ updateFields, extra, isError }: props) => {
  const toggleActives = (activity: string) => {
    let yourVibes = extra.vibe;
    const isAlreadyAdded = yourVibes.find((item) => item === activity);
    if (isAlreadyAdded) {
      yourVibes = yourVibes.filter((item) => item !== activity);
    } else {
      yourVibes.push(activity);
    }
    updateFields({
      extra: {
        ...extra,
        vibe: yourVibes,
      },
    });
  };
  return (
    <>
      <div className="inline max-w-[98px] text-center text-white font-medium flex-none bg-yellow-500 rounded p-1">
        Optional
      </div>
      <input type="hidden" name="vibe" />
      {extra.vibe.map((item, i) => {
        return <input type="hidden" name={`vibe`} value={item} key={i} />;
      })}
      <h2 className="section-title-sm mt-4">What’s your travel vibe?</h2>
      <ul className="w-full flex flex-wrap daropdown">
        {vibes.map((item, i) => {
          return (
            <li
              onClick={() => toggleActives(item)}
              key={i}
              role="button"
              className={`text-dark text-sm p-2 m-2 border border-border ${
                extra.vibe.includes(item) ? "bg-primary text-white" : ""
              }`}
            >
              <span onClick={() => {}}>{item}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Extra;
