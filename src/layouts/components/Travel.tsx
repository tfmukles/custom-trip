import { useForm } from "@/hooks/useForm";
import StepperNavigation from "./StepperNavigation";

const initialState = {
  adults: 1,
  children: 0,
};

type state = typeof initialState;

const Travel = ({
  currentStep,
  setFromData,
  nextStep,
  prevStep,
}: {
  currentStep: number;
  setFromData?: any;
  nextStep: () => void;
  prevStep: () => void;
}) => {
  const { formData, isError, onUpdate, validateCheck } = useForm<state>({
    initialState,
    key: "travel",
  });

  const { adults, children } = formData;

  const onIncrement = (setData: any) => {
    setData((data: any) => data + 1);
  };

  const onDecrement = (setData: any) => {
    setData((data: any) => data - 1);
  };
  return (
    <>
      <h2 className="section-title-sm">
        How many people are going on the trip?
      </h2>
      <div className="flex space-x-4 items-center">
        <button
          onClick={() => onUpdate({ adults: adults - 1 })}
          disabled={adults === 1}
          type="button"
          className="border border-border rounded px-6 py-1 text-xl font-bold"
        >
          -
        </button>
        <div>{adults} Adults</div>
        <button
          onClick={() => onUpdate({ adults: adults + 1 })}
          type="button"
          className="border border-border rounded px-6 py-1 text-xl font-bold"
        >
          +
        </button>
      </div>

      <div className="flex space-x-4 items-center mt-8">
        <button
          onClick={() => onUpdate({ children: children - 1 })}
          disabled={children === 0}
          type="button"
          className="border border-border rounded px-6 py-1 text-xl font-bold"
        >
          -
        </button>
        <div>{children} Children</div>
        <button
          onClick={() => onUpdate({ children: children + 1 })}
          type="button"
          className="border border-border rounded px-6 py-1 text-xl font-bold"
        >
          +
        </button>
      </div>

      <div className="w-full h-0.5 bg-theme-light mt-10" />
      {[...Array(children).keys()].map((i) => (
        <div className="mt-5" key={i}>
          <p className="text-sm text-dark mb-3">Children {i + 1} age</p>
          <input type="number" className="p-3" placeholder="0-17" />
        </div>
      ))}

      <StepperNavigation
        currentStep={currentStep}
        nextStep={nextStep}
        prevStep={prevStep}
        validateCheck={validateCheck}
      />
    </>
  );
};

export default Travel;
