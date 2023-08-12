import { steps } from "../steppersContext";

const StepperNavigation = ({
  currentStep,
  nextStep,
  prevStep,
  validateCheck,
}: {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  validateCheck?: () => void;
}) => {
  const hasNext = currentStep <= Object.keys(steps).length;
  const hasPrev = currentStep > 1;

  return (
    <div className="flex justify-between mt-auto">
      {hasPrev && (
        <button type="button" onClick={prevStep} className="btn btn-primary">
          Prev
        </button>
      )}
      {hasNext && (
        <button
          type="button"
          onClick={() => {
            let isError = validateCheck && validateCheck();
            console.log({ isError });
            if (!isError) {
              nextStep();
            }
          }}
          className="btn btn-primary ml-auto"
        >
          {Object.keys(steps).length === currentStep ? "Finish" : "Next"}
        </button>
      )}
    </div>
  );
};

export default StepperNavigation;
