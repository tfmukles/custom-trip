const Travel = () => {
  return (
    <>
      <h2 className="section-title-sm">
        How many people are going on the trip?
      </h2>
      <div className="flex space-x-4 items-center">
        <button className="border border-border rounded px-6 py-1 text-xl font-bold">
          -
        </button>
        <div>5 Adults</div>
        <button className="border border-border rounded px-6 py-1 text-xl font-bold">
          +
        </button>
      </div>

      <div className="flex space-x-4 items-center mt-8">
        <button className="border border-border rounded px-6 py-1 text-xl font-bold">
          -
        </button>
        <div>5 Children</div>
        <button className="border border-border rounded px-6 py-1 text-xl font-bold">
          +
        </button>
      </div>

      <div className="w-full h-0.5 bg-theme-light mt-10" />
      <div className="mt-5">
        <p className="text-sm text-dark mb-3">Children 1 age</p>
        <input type="number" className="p-3" placeholder="0-17" />
      </div>
    </>
  );
};

export default Travel;
