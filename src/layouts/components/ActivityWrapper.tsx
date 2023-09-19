import { intersettodo } from "@/types";
import ActivitesItem from "./ActivityItem";

const ActivityWrapper = ({
  seletectActivities,
  toggleActives,
  activities,
  parentActivity,
}: {
  seletectActivities: intersettodo[];
  toggleActives: (activity: string, parentActivity?: string) => void;
  activities: intersettodo[];
  parentActivity?: string;
}) => {
  {
    return (
      <ul className="flex flex-wrap">
        {activities.map((item, i) => {
          return (
            <ActivitesItem
              key={i}
              seletectActivities={seletectActivities}
              toggleActives={toggleActives}
              activity={item}
              parentActivity={parentActivity}
            />
          );
        })}
      </ul>
    );
  }
};

export default ActivityWrapper;
