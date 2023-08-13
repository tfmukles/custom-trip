"use client";
import { useEffect, useRef, useState } from "react";

const ActivitesItem = ({
  activities,
}: {
  activities: {
    label: string;
    children?: {
      label: string;
    }[];
  }[];
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        if (isOpen) {
          setOpen(false);
        }
      }
    }
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [rootRef, isOpen]);

  return (
    <ul className="w-full flex flex-wrap daropdown">
      {activities.map((activity, i) => (
        <li key={i}>
          <div role="button" className="r relative">
            <span
              ref={buttonRef}
              className={`text-dark text-sm p-2 m-2 border border-border`}
            >
              {activity.label}
            </span>
            {/* {activity.children && (
              <AnimatePresence>
                <div
                  ref={rootRef}
                  className={`absolute  dropdown min-w-[260px] top-[calc(100%_+_12px)] left-0 border border-theme-light bg-white shadow-lg rounded-sm py-2 ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  <ActivitesItem
                    activities={activity.children}
                    selectedActivities={selectedActivities[0]?.children ?? []}
                    toggleActives={toggleActives}
                    parentActivity={activity.label}
                  />
                </div>
              </AnimatePresence>
            )} */}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ActivitesItem;
