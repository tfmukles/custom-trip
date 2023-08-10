const Budget = () => {
  return (
    <>
      <h2 className="section-title-sm">
        What is a comfortable budget range for this trip, excluding flights?
      </h2>
      <p className="section-desc">
        We understand you might not have an exact budget at this point and
        that's okay. We're here to help!
      </p>
      <p className="section-desc">
        <b className="text-base">
          Average budget for 7 travelers for 18 days in Costa Rica: $20,000+
        </b>
      </p>
      <div className="flex space-x-4 items-center">
        <div className="">
          <label className="block mb-3">From</label>
          <select>
            <option>From</option>
            <option>$1000</option>
          </select>
        </div>
        <div className="">
          <label className="block mb-3">To</label>
          <select>
            <option>From</option>
            <option>$1000</option>
          </select>
        </div>
      </div>
      <p className="text-sm font-bold text-dark mt-3">
        How do we calculate your average budget?
      </p>
    </>
  );
};

export default Budget;
