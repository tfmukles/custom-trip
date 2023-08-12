"use client";
import Default from "@/components/Default";
import Modal from "@/components/Modal";
import Step from "@/components/Step";
import StepperBanner from "@/components/StepperBanner";
import {
  SteppersContext,
  steps,
  useStepperContext,
} from "@/layouts/steppersContext";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

type StepKey = keyof typeof steps;

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

const Home = () => {
  const steperContext = useStepperContext();
  const [isOpen, setOpen] = useState(false);
  let [step, setStep] = useState<number>(0);
  const onOpen = () => setOpen(true);
  const onClose = (e: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => {
    const target = e.target as HTMLElement;
    if (!target.closest(".modal-body")) {
      setOpen(false);
    }
  };

  let DynamicContent = steps[step as StepKey]?.Content ?? Default;
  const nextStep = () => setStep((step) => step + 1);
  const prevStep = () => setStep((step) => step - 1);
  const [data, setData] = useState({});

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
                          "--height": calculateHeight({
                            currentStep: step,
                            totalSteps: Object.keys(steps).length,
                          }),
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
                      <div className="h-full flex flex-col">
                        <SteppersContext.Provider
                          value={{
                            data,
                            setData,
                          }}
                        >
                          <DynamicContent
                            currentStep={step}
                            nextStep={nextStep}
                            prevStep={prevStep}
                            setFromData={setData}
                          />
                        </SteppersContext.Provider>
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

export default Home;
