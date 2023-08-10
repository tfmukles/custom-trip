"use client";
import Modal from "@/components/Modal";
import Step from "@/components/Step";
import { SteppersContext, stepper } from "@/layouts/steppersContext";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Content = () => {
  const data = stepper();
  console.log(data);
  return (
    <div className="w-full">
      <h1 className="font-medium mb-3">Let’s start planning your trip</h1>
      <p className="text-xl mb-4 max-w-lg">
        Share your travel preferences then select an expert with intimate
        knowledge of your destination to plan your next getaway.
      </p>
      <button className="btn btn-primary mb-6">Get Started</button>
    </div>
  );
};

const steps = {
  1: {
    label: "location",
    Content: <Content />,
  },
  2: {
    label: "dates",
    Content: <Content />,
  },
  3: {
    label: "travelers",
    Content: <Content />,
  },
  4: {
    label: "budgets",
    Content: <Content />,
  },
  5: {
    label: "activities",
    Content: <Content />,
  },
  6: {
    label: "extra",
    Content: <Content />,
  },
};

const Home = () => {
  const [isOpen, setOpen] = useState(false);
  let [step, setStep] = useState<number>(2);
  const onOpen = () => setOpen(true);
  const onClose = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target.closest(".modal-body")) {
      setOpen(false);
    }
  };

  return (
    <div className="section  bg-[#0e2c23]">
      <div className="container">
        <button
          onClick={onOpen}
          onFocus={onOpen}
          className="bg-[#f2b203] rounded-full text-base font-medium py-4 px-5 text-black focus:ring-2 ring-white"
        >
          Find A Trip Designer
        </button>

        {
          <AnimatePresence>
            {isOpen && (
              <Modal onClose={onClose}>
                <div className="max-w-[1000px] p-6 bg-white mx-auto">
                  <Image
                    src={"/images/intro-default.jpg"}
                    className="mb-6"
                    width={1000}
                    height={200}
                    alt="intro-img"
                  />

                  <div className="flex space-x-10">
                    <ul
                      style={
                        {
                          "--height": `${101 * step}px`,
                        } as React.CSSProperties
                      }
                      className="stepper-steps"
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
                    </ul>
                    <SteppersContext.Provider value={{ steps }}>
                      {steps["1"].Content}
                    </SteppersContext.Provider>
                  </div>
                </div>
              </Modal>
            )}
          </AnimatePresence>
        }
      </div>
    </div>
  );
};

export default Home;
