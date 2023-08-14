"use client";
import DynamicIcon from "@/helpers/DynamicIcon";
import { intersettodo } from "@/types";
import { AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import ActivityWrapper from "./ActivityWrapper";

const ActivitesItem = ({
  activity,
  toggleActives,
  parentActivity,
  seletectActivities,
}: {
  activity: {
    label: string;
    children?: {
      label: string;
    }[];
  };
  toggleActives: (activity: string, parentActivity?: string) => void;
  parentActivity?: string;
  seletectActivities: intersettodo[];
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
    <li>
      <div role="button" className="relative">
        <span
          onClick={() => {
            setOpen(true);
            !activity.children && toggleActives(activity.label, parentActivity);
          }}
          ref={buttonRef}
          className={`text-dark text-sm p-2 m-2 border border-border ${
            seletectActivities?.find((item) => item.label === activity.label)
              ? "bg-primary text-white"
              : ""
          }`}
        >
          {activity?.label}
          {activity.children && (
            <>
              {" "}
              <DynamicIcon icon="FaAngleDown" className="inline-block" />{" "}
              {
                seletectActivities?.find(
                  (item) => item.label === activity.label,
                )?.children?.length
              }
            </>
          )}
        </span>
        {activity.children && (
          <AnimatePresence>
            <div
              ref={rootRef}
              className={`absolute  dropdown min-w-[260px] top-[calc(100%_+_12px)] left-0 border border-theme-light bg-white shadow-lg rounded-sm py-2 ${
                isOpen ? "block" : "hidden"
              }`}
            >
              <ActivityWrapper
                activities={activity.children}
                seletectActivities={
                  seletectActivities?.find(
                    (item) => item.label === activity.label,
                  )?.children || []
                }
                toggleActives={toggleActives}
                parentActivity={activity.label}
              />
            </div>
          </AnimatePresence>
        )}
      </div>
    </li>
  );
};

export default ActivitesItem;
