"use client";
import Default from "@/components/Default";
import Modal from "@/components/Modal";
import Step from "@/components/Step";
import StepperBanner from "@/components/StepperBanner";
import { SteppersContext, steps } from "@/layouts/steppersContext";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

type StepKey = keyof typeof steps;

const Home = () => {
  const [travelDetails, setTravel] = useState({
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
  });

  console.log({ travelDetails });

  const onTrvelDataChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setTravel((prev) => ({ ...prev, [name]: value }));
  };

  const [isOpen, setOpen] = useState(false);
  let [step, setStep] = useState<number>(0);
  const onOpen = () => setOpen(true);
  const onClose = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest(".modal-body")) {
      setOpen(false);
    }
  };

  let DynamicContent = steps[step as StepKey]?.Content ?? Default;
  const nextStep = () => setStep((step) => step + 1);
  const prevStep = () => setStep((step) => step - 1);

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
                <form className="max-w-[1000px] p-6 bg-white mx-auto">
                  <StepperBanner onClose={onClose} />
                  <div className="row gx-4">
                    <div
                      style={
                        {
                          "--height": `${65 + (step - 1) * 100}px`,
                        } as React.CSSProperties
                      }
                      className="stepper-steps col-1 md:col-3"
                    >
                      {Array.from(Object.entries(steps)).map(
                        ([key, { label }]) => {
                          return (
                            <Step
                              key={key}
                              label={label}
                              step={Number(key)}
                              currentStep={step}
                            />
                          );
                        },
                      )}
                    </div>
                    <div className="md:col-9 col">
                      <SteppersContext.Provider
                        value={{
                          steps,
                          nextStep,
                          currentStep: step,
                          travel: travelDetails,
                          setTravel: onTrvelDataChange,
                        }}
                      >
                        <div className="h-full flex flex-col">
                          <DynamicContent />
                          <div className="mt-auto flex justify-between">
                            {step >= 2 && (
                              <button
                                type="button"
                                onClick={prevStep}
                                className="btn underline hover:bg-theme-light"
                              >
                                Back
                              </button>
                            )}
                            {step < Object.keys(steps).length && (
                              <button
                                type="button"
                                onClick={nextStep}
                                className="btn btn-primary ml-auto"
                              >
                                Next
                              </button>
                            )}
                          </div>
                        </div>
                      </SteppersContext.Provider>
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

export default Home;
