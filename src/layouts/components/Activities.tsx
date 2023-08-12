import { useForm } from "@/hooks/useForm";
import ActivitesItem from "./ActivityItem";
import StepperNavigation from "./StepperNavigation";

const activities = [
  {
    label: "Beatch",
    children: [{ label: "Beatch" }],
  },
];

const initialState = {
  activities: [] as string[],
};

type state = typeof initialState;

const Activities = ({
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
  const { formData, isError } = useForm<state>({ initialState });

  const toggleActivity = (activity: string) => {
    const newActivities = [...formData.activities];
    if (newActivities.includes(activity)) {
      newActivities.splice(newActivities.indexOf(activity), 1);
    } else {
      newActivities.push(activity);
    }
  };

  return (
    <>
      {isError && (
        <p className="bg-red-300 p-3 rounded mb-5 text-dark">
          Please complete this field so we can find the best Trip Designers for
          you.
        </p>
      )}
      <h2 className="section-title-sm">What do you want to do there?</h2>
      <ActivitesItem activities={activities} />

      <div className="mt-4">
        <input type="checkbox" name="considerations" id="considerations" />
        <label className="ml-3" htmlFor="considerations">
          Any important considerations we should be aware of?
        </label>
      </div>

      <StepperNavigation
        currentStep={currentStep}
        nextStep={nextStep}
        prevStep={prevStep}
      />
    </>
  );
};

export default Activities;
