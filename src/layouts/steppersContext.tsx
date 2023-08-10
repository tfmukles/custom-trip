"use client";

import { createContext, useContext } from "react";
import Activities from "./components/Activities";
import Budget from "./components/Budget";
import Dates from "./components/Dates";
import Extra from "./components/Extra";
import Location from "./components/Location";
import Travel from "./components/Travel";

export const steps = {
  1: {
    label: "location",
    Content: Location,
  },

  2: {
    label: "dates",
    Content: Dates,
  },
  3: {
    label: "travelers",
    Content: Travel,
  },
  4: {
    label: "budgets",
    Content: Budget,
  },
  5: {
    label: "activities",
    Content: Activities,
  },
  6: {
    label: "extra",
    Content: Extra,
  },
};

export type GlobalContent = {
  currentStep: number;
  steps: { [key: number]: { label: string; Content: () => JSX.Element } };
  nextStep?: any;
  travel: {
    country: string;
    date: string;
    adults: number;
    children: {
      total: number;
      ages: number[];
    };
    range: {
      from: number;
      to: number;
    };
    desired: string[];
    consideration: boolean;
    travelVibe: string;
  };
  setTravel?: (data: any) => void;
};

export const SteppersContext = createContext<GlobalContent>({
  steps,
  currentStep: 0,
  travel: {
    country: "",
    date: "",
    adults: 0,
    children: {
      total: 0,
      ages: [],
    },
    range: {
      from: 0,
      to: 0,
    },
    desired: [],
    consideration: false,
    travelVibe: "",
  },
});

export const useStepperContext = () => useContext(SteppersContext);
