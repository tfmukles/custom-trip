import { useForm } from "@/hooks/useForm";
import StepperNavigation from "./StepperNavigation";

const initialState = [
  {
    label: "Romantic",
  },
];

interface state {
  label: string;
}
[];

const Extra = ({
  currentStep,
  nextStep,
  prevStep,
}: {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
}) => {
  const { formData, isError } = useForm<state>({
    initialState,
    key: "extra",
  });

  return (
    <>
      <div className="inline max-w-[98px] text-center text-white font-medium flex-none bg-yellow-500 rounded p-1">
        Optional
      </div>
      <h2 className="section-title-sm mt-4">What’s your travel vibe?</h2>

      <StepperNavigation
        currentStep={currentStep}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    </>
  );
};

export default Extra;
