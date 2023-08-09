"use client";
import Modal from "@/components/Modal";
import Step from "@/components/Step";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const Home = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="section  bg-[#0e2c23]">
      <div className="container">
        <button
          onClick={() => setOpen(true)}
          className="bg-[#f2b203] rounded-full text-base font-medium py-4 px-5 text-black focus:ring-2 ring-white"
        >
          Find A Trip Designer
        </button>

        {
          <AnimatePresence>
            {isOpen && (
              <Modal>
                <div className="max-w-[1000px] bg-white mx-auto">
                  <Image
                    src={"/images/intro-default.jpg"}
                    width={1000}
                    height={200}
                    alt="intro-img"
                  />

                  <div className="m-6 flex space-x-10">
                    <div>
                      <Step />
                    </div>
                    <div className="w-full">
                      <h1 className="font-medium mb-3">
                        Let’s start planning your trip
                      </h1>
                      <p className="text-xl mb-4 max-w-lg">
                        Share your travel preferences then select an expert with
                        intimate knowledge of your destination to plan your next
                        getaway.
                      </p>
                      <button className="btn btn-primary mb-6">
                        Get Started
                      </button>
                    </div>
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
