"use client";

const Step = ({ isActive }: { isActive?: boolean }) => {
  const color = isActive ? "#0e2c23" : "#b6d2c4";

  return (
    <div className={`text-[${color}] flex space-x-8 text-sm items-center`}>
      <div
        className={
          isActive
            ? "border-2 border-[${color}] inline-block rounded-full p-[3px]"
            : ""
        }
      >
        <div
          className={`w-[22px] h-[22px] p-2 bg-[${color}] rounded-full text-white inline-flex items-center justify-center font-bold`}
        >
          1
        </div>
      </div>
      <p className="uppercase text-inherit">Location</p>
    </div>
  );
};

export default Step;
