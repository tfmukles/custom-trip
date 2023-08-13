"use client";

import Activities from "@/components/Activities";
import Budget from "@/components/Budget";
import Dates from "@/components/Dates";
import Default from "@/components/Default";
import Extra from "@/components/Extra";
import Location from "@/components/Location";
import Modal from "@/components/Modal";
import Step from "@/components/Step";
import StepperBanner from "@/components/StepperBanner";
import Travel from "@/components/Travel";
import { useMultistepForm } from "@/hooks/useMultiStepForm";
import { FormData } from "@/types";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const calculateHeight = ({
  currentStep,
  totalSteps,
}: {
  currentStep: number;
  totalSteps: number;
}) => {
  return currentStep === totalSteps - 1
    ? "100%"
    : `65px + ${100 * currentStep}px`;
};

const schema = {
  location: {
    name: {
      require: true,
    },
  },
  dates: {
    startDate: {
      require: true,
    },
    endDate: {
      require: true,
    },
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
  dates: {
    startDate: "",
    endDate: "",
  },
  travelers: {
    adults: "1",
    children: "0",
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

type keys = keyof FormData;

const About = () => {
  const [hasError, setError] = useState(false);
  const [data, setData] = useState(INITIAL_DATA);
  const [isOpen, setOpen] = useState(false);
  const onOpen = () => setOpen(true);
  const onClose = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    const target = e.target as HTMLElement;
    if (!target.closest(".modal-body")) {
      setOpen(false);
    }
  };

  const isValidate = (
    label: keyof FormData,
    data: FormData,
    schema: any,
  ): any => {
    const currentData: any = data[label];
    let currentSchema = schema[label];
    // console.log(currentSchema);

    const isErrors = Array.from(Object.entries(currentSchema)).map(
      ([key, value]) => {
        if ((value as any)?.require === true) {
          if (
            typeof currentData[key] === "string" &&
            currentData[key].length > 0
          ) {
            return true;
          }

          if (typeof currentData[key] === "number" && currentData[key] > 0) {
            return true;
          }
          if (Array.isArray(currentData[key]) && currentData[key].length > 0) {
            return true;
          }

          if (
            typeof currentData[key] === "object" &&
            Object.keys(currentData[key] as any).length === 0
          ) {
            if (currentData[key] instanceof Date) {
              return true;
            }

            return false;
          }

          return false;
        }
        return true;
      },
    );
    setError(isErrors.includes(false));
    return isErrors.includes(false);
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
        component: (
          <Location isError={hasError} {...data} updateFields={updateFields} />
        ),
      },
      {
        label: "dates",
        component: (
          <Dates isError={hasError} {...data} updateFields={updateFields} />
        ),
      },
      {
        label: "travelers",
        component: (
          <Travel isError={hasError} {...data} updateFields={updateFields} />
        ),
      },
      {
        label: "budget",
        component: (
          <Budget isError={hasError} {...data} updateFields={updateFields} />
        ),
      },
      {
        label: "activites",
        component: (
          <Activities
            isError={hasError}
            {...data}
            updateFields={updateFields}
          />
        ),
      },
      {
        label: "extra",
        component: (
          <Extra isError={hasError} {...data} updateFields={updateFields} />
        ),
      },
    ]);

  console.log(data);
  const { component: activeComponet, label } = steps[currentStepIndex] || {};
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
                          key={i}
                          label={item.label}
                          step={i}
                          currentStep={currentStepIndex}
                        />
                      ))}
                    </div>
                    <div className="md:col-9 col">
                      <div className="h-full flex flex-col">
                        {activeComponet ?? <Default />}
                        <div className="flex justify-between mt-auto">
                          {!isFirstStep && (
                            <button
                              onClick={back}
                              type="button"
                              className="btn btn-primary"
                            >
                              Prev
                            </button>
                          )}
                          <button
                            onClick={() => {
                              if (currentStepIndex < 0) {
                                next();
                              } else {
                                if (
                                  !isValidate(
                                    label as keyof FormData,
                                    data,
                                    schema,
                                  )
                                ) {
                                  next();
                                }
                              }
                            }}
                            type={"button"}
                            className="btn btn-primary ml-auto"
                          >
                            {isLastStep ? "Finish" : "Next"}
                          </button>
                        </div>
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
