"use client";

import { createContext, useContext } from "react";

const steps: { [key: number]: { label: string; Content: null } } = {
  1: {
    label: "location",
    Content: null,
  },
  2: {
    label: "dates",
    Content: null,
  },
  3: {
    label: "travelers",
    Content: null,
  },
  4: {
    label: "budgets",
    Content: null,
  },
  5: {
    label: "activities",
    Content: null,
  },
  6: {
    label: "extra",
    Content: null,
  },
};

export type GlobalContent = {
  steps: { [key: number]: { label: string; Content: React.JSX.Element } };
  setCopy: (c: string) => void;
};

export const SteppersContext = createContext<GlobalContent | null>(null);

export const stepper = () => useContext(SteppersContext);
