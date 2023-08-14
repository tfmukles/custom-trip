import { IFormData } from "@/types";
import ActivitiesValues from "./ActivitesValues";
import ActivityWrapper from "./ActivityWrapper";

const activities = [
  {
    label: "Must See Attractions",
    children: [{ label: "1" }, { label: "2" }, { label: "3" }],
  },
  {
    label: "Beach",
  },
  {
    label: "Local Culture",
  },
  {
    label: "Must See Attractions2",
    children: [{ label: "1" }, { label: "2" }, { label: "3" }],
  },
];

type props = IFormData & {
  updateFields: (fields: Partial<any>) => void;
  isError: boolean;
};

const Activities = ({ updateFields, activites, isError }: props) => {
  const toggleActives = (activity: string, parentActivity?: string) => {
    let interestedTodo = activites.intersettodo;
    if (parentActivity) {
      const isParentFound = interestedTodo.find(
        (item) => item.label === parentActivity,
      );
      if (isParentFound && isParentFound.children) {
        const isChildrenExit = isParentFound.children.find(
          (item) => item.label === activity,
        );
        if (isChildrenExit) {
          isParentFound.children = isParentFound.children?.filter(
            (item) => item.label !== activity,
          );
          if (isParentFound.children.length === 0) {
            //@ts-ignore
            delete isParentFound.label;
            delete isParentFound.children;
          }
        } else {
          isParentFound.children.push({ label: activity });
        }
      } else {
        interestedTodo.push({
          label: parentActivity,
          children: [{ label: activity }],
        });
      }
    } else {
      const isAlreadyAdded = interestedTodo.find(
        (item) => item.label === activity,
      );
      if (isAlreadyAdded) {
        interestedTodo = interestedTodo.filter(
          (item) => item.label !== activity,
        );
      } else {
        interestedTodo.push({ label: activity, children: [] });
      }
    }
    updateFields({
      activites: {
        ...activites,
        intersettodo: interestedTodo,
      },
    });
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
      <input type="hidden" name="activites" />
      <ActivitiesValues selectedActivites={activites.intersettodo} />
      <ActivityWrapper
        activities={activities}
        seletectActivities={activites.intersettodo}
        toggleActives={toggleActives}
      />

      <div className="mt-4">
        <input
          onChange={() =>
            updateFields({
              activites: {
                ...activites,
                considerations: !activites.considerations,
              },
            })
          }
          checked={activites.considerations}
          type="checkbox"
          name="considerations"
          id="considerations"
        />
        <label className="ml-3" htmlFor="considerations">
          Any important considerations we should be aware of?
        </label>
      </div>
    </>
  );
};

export default Activities;
