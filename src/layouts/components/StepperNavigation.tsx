import { steps } from "../steppersContext";

const StepperNavigation = ({
  currentStep,
  nextStep,
  prevStep,
  validateCheck,
  setData,
  indivisualFormData,
}: {
  indivisualFormData?: any;
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  validateCheck?: () => void;
  data?: any;
  setData: any;
}) => {
  const hasNext = currentStep <= Object.keys(steps).length;
  const hasPrev = currentStep > 1;
  const isLastStep = currentStep === Object.keys(steps).length;

  return (
    <div className="flex justify-between mt-auto">
      {hasPrev && (
        <button type="button" onClick={prevStep} className="btn btn-primary">
          Prev
        </button>
      )}
      {hasNext && (
        <button
          type={isLastStep ? "submit" : "button"}
          onClick={() => {
            let isError = validateCheck && validateCheck();
            if (!isError) {
              setData((data: any) => ({ ...data, ...indivisualFormData }));
              !isLastStep && nextStep();
            }
          }}
          className="btn btn-primary ml-auto"
        >
          {isLastStep ? "Finish" : "Next"}
        </button>
      )}
    </div>
  );
};

export default StepperNavigation;
