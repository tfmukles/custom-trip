"use client";

import Dates from "@/components/Dates";
import Location from "@/components/Location";
import Modal from "@/components/Modal";
import Step from "@/components/Step";
import StepperBanner from "@/components/StepperBanner";
import StepperNavigation from "@/components/StepperNavigation";
import { useMultistepForm } from "@/hooks/useMultiStepForm";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const calculateHeight = ({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) => {
  return currentStep === totalSteps
    ? "100%"
    : `65px + ${100 * (currentStep - 1)}px`;
};

type FormData = {
  location: {
    name: string;
  };
  dates: {};
  travelers: {
    adults: string;
    children: string;
    ages: [];
  };
  budget: {
    form: string;
    to: string;
  };
  activites: {
    intersettodo: [];
    considerations: boolean;
  };
  extra: {
    vibe: [];
  };
};

const schema = {
  location: {
    name: {
      require: true,
    },
  },
  dates: {
    require: true,
  },
  travelers: {
    adults: {
      require: true,
    },
    children: {
      require: false,
    },
  },
  budget: {
    form: {
      require: true,
    },
    to: {
      require: true,
    },
  },
  activites: {
    intersettodo: {
      require: true,
    },
    considerations: {
      require: false,
    },
  },
  extra: {
    vibe: {
      require: false,
    },
  },
};

const INITIAL_DATA: FormData = {
  location: {
    name: "",
  },
  dates: {},
  travelers: {
    adults: "",
    children: "",
    ages: [],
  },
  budget: {
    form: "",
    to: "",
  },
  activites: {
    intersettodo: [],
    considerations: false,
  },
  extra: {
    vibe: [],
  },
};

type Schema = { [key: string]: { required: boolean } };

const validate = (
  label: keyof FormData,
  data: FormData,
  schema: Schema,
): boolean => {
  const currentData = data[label];
  let currentSchema = schema[label];

  return true; // Default to true for now, you can add more validation logic here
};

const About = () => {
  const [data, setData] = useState(INITIAL_DATA);
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    const target = e.target as HTMLElement;
    if (!target.closest(".modal-body")) {
      setOpen(false);
    }
  };

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      {
        label: "location",
        component: <Location {...data} updateFields={updateFields} />,
      },
      {
        label: "Dates",
        component: <Dates />,
      },
    ]);
  const activeComponet = steps[currentStepIndex].component;
  return (
    <div className="section  bg-[#0e2c23]">
      <div className="container">
        <button
          onClick={onOpen}
          className="bg-[#f2b203] rounded-full text-base font-medium py-4 px-5 text-black focus:ring-2 ring-white"
        >
          Find A Trip Designer
        </button>

        {
          <AnimatePresence>
            {isOpen && (
              <Modal onClose={onClose}>
                <form
                  name="contact"
                  action="/pages/success"
                  method="POST"
                  data-netlify="true"
                  className="max-w-[1000px] p-6 bg-white mx-auto"
                >
                  <input type="hidden" name="contact" value="name_of_my_form" />
                  <StepperBanner onClose={onClose} />
                  <div className="row gx-4">
                    <div
                      style={
                        {
                          "--height": calculateHeight({
                            currentStep: currentStepIndex,
                            totalSteps: steps.length,
                          }),
                        } as React.CSSProperties
                      }
                      className="stepper-steps col-1 md:col-3"
                    >
                      {steps.map((item, i) => (
                        <Step
                          label={item.label}
                          step={i + 1}
                          currentStep={currentStepIndex}
                        />
                      ))}
                    </div>
                    <div className="md:col-9 col">
                      <div className="h-full flex flex-col">
                        {activeComponet}
                        <StepperNavigation
                          back={back}
                          isFirstStep={isFirstStep}
                          isLastStep={isLastStep}
                          next={next}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </Modal>
            )}
          </AnimatePresence>
        }
      </div>
    </div>
  );
};

export default About;
