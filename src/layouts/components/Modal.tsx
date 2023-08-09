import DynamicIcon from "@/helpers/DynamicIcon";
import { motion } from "framer-motion";

const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 bg-[#faf1edcc] w-full h-full z-50 flex flex-col justify-center items-center overflow-y-auto"
    >
      <div className="modal-body">{children}</div>
    </motion.div>
  );
};

export default Modal;

function NewComp() {
  return (
    <>
      <h2 className="mb-5 font-primary">Where would you like to go?</h2>
      <div className="border-2 border-black rounded-lg py-1.5 relative">
        <span className="absolute left-0 top-1/2 -translate-y-1/2 pl-3 text-center">
          <DynamicIcon
            icon="FaMagnifyingGlass"
            className="w-6 h-6 text-inherit"
          />
        </span>
        <input
          className="inline-block pl-12 bg-transparent w-full border-none focus:shadow-0 focus:outline-none focus:ring-0"
          placeholder=""
          type="text"
          name="text"
        />
      </div>
    </>
  );
}
