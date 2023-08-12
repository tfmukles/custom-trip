"use client";
import { useRef, useState } from "react";

const ActivitesItem = ({
  activities,
}: {
  activities: Array<{
    label: string;
    children?: Array<{
      label: string;
    }>;
  }>;
}) => {
  const buttonRef = useRef<HTMLButtonElement>();
  const [isOpen, setOpen] = useState(false);
  const onDropDownShow = () => {
    setOpen(true);
  };

  return (
    <ul className="w-full flex flex-wrap daropdown">
      {activities.map((activity, i) => (
        <li key={i}>
          <button
            type="button"
            className="p-2 m-2 text-sm text-theme-light border border-border reldsative"
          >
            <span className="text-dark text-sm">{activity.label}</span>
            {/* {activity.children && (
              <AnimatePresence>
                {activity.children && (
                  <div className="absolute  dropdown min-w-[260px] top-[calc(100%_+_8px)] left-0 border border-theme-light bg-white shadow-lg rounded-sm">
                    <ActivitesItem activities={activity.children} />
                  </div>
                )}
              </AnimatePresence>
            )} */}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ActivitesItem;
