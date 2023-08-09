"use client";

const Step = ({ isActive }: { isActive?: boolean }) => {
  const textColor = isActive ? "text-[#0e2c23]" : "text-[#b6d2c4]";
  const bgcolor = isActive ? "bg-[#0e2c23]" : "bg-[#b6d2c4]";
  const borderColor = isActive ? "border-[#0e2c23]" : "border-[#b6d2c4]";

  return (
    <div className={`${textColor} flex space-x-8 text-sm items-center`}>
      <div
        className={
          isActive
            ? `border-2 ${borderColor} inline-block rounded-full p-[3px]`
            : ""
        }
      >
        <div
          className={`w-[22px] h-[22px] p-2 ${bgcolor} rounded-full text-white inline-flex items-center justify-center font-bold`}
        >
          1
        </div>
      </div>
      <p className="uppercase text-inherit">Location</p>
    </div>
  );
};

export default Step;
