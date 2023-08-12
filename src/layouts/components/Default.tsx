import StepperNavigation from "./StepperNavigation";

const Default = ({
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
  return (
    <>
      <h1 className="section-title">Let’s start planning your trip</h1>
      <p className="section-desc max-w-lg">
        Share your travel preferences then select an expert with intimate
        knowledge of your destination to plan your next getaway.
      </p>
      <StepperNavigation
        currentStep={currentStep}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    </>
  );
};

export default Default;
