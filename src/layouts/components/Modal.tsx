import { motion } from "framer-motion";
import Image from "next/image";
import Step from "./Step";

const Modal = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 bg-[#faf1edcc] w-full h-full z-50 flex flex-col justify-center items-center overflow-y-auto"
    >
      <div className="max-w-[1000px] bg-white mx-auto">
        <Image
          src={"/images/intro-default.jpg"}
          width={1000}
          height={200}
          alt="intro-img"
        />

        <div className="m-6">
          <Step />
        </div>
      </div>
    </motion.div>
  );
};

export default Modal;
