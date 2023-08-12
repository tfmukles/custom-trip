const Extra = ({
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
      <div className="inline max-w-[98px] text-center text-white font-medium flex-none bg-yellow-500 rounded p-1">
        Optional
      </div>
      <h2 className="section-title-sm mt-4">What’s your travel vibe?</h2>
    </>
  );
};

export default Extra;
