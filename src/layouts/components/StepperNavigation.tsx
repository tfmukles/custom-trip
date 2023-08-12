const StepperNavigation = ({
  isFirstStep,
  isLastStep,
  back,
  next,
}: {
  isFirstStep: boolean;
  isLastStep: boolean;
  back: () => void;
  next: () => void;
}) => {
  return (
    <div className="flex justify-between mt-auto">
      {!isFirstStep && (
        <button onClick={back} type="button" className="btn btn-primary">
          Prev
        </button>
      )}
      <button
        onClick={next}
        type={"button"}
        className="btn btn-primary ml-auto"
      >
        {isLastStep ? "Finish" : "Next"}
      </button>
    </div>
  );
};

export default StepperNavigation;
