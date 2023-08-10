const Activities = () => {
  return (
    <>
      <h2 className="section-title-sm">What do you want to do there?</h2>
      <ul>
        {[...Array(12)].map((item, i) => (
          <button className="border border-border px-2 py-1 m-2" key={i}>
            Beach
          </button>
        ))}
      </ul>

      <textarea
        rows={3}
        className="border border-border mt-3"
        name="text"
        value={""}
      />

      <div className="mt-4">
        <input type="checkbox" name="considerations" id="considerations" />
        <label className="ml-3" htmlFor="considerations">
          Any important considerations we should be aware of?
        </label>
      </div>
    </>
  );
};

export default Activities;
