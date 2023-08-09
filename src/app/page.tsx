"use client";
import Modal from "@/components/Modal";
import { AnimatePresence } from "framer-motion";
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

        {<AnimatePresence>{isOpen && <Modal />}</AnimatePresence>}
      </div>
    </div>
  );
};

export default Home;
