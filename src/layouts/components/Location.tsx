import DynamicIcon from "@/helpers/DynamicIcon";
import { IFormData } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const getCitites = async () => {
  const res = await fetch(
    "https://countriesnow.space/api/v0.1/countries/cities",
    {
      body: JSON.stringify({
        country: "spain",
      }),
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  const data = await res.json();
  return data;
};

type props = IFormData & {
  updateFields: (fields: Partial<any>) => void;
  isError: boolean;
};

const Location = ({ updateFields, location, isError }: props) => {
  const [cities, setCities] = useState<{ isLoading: boolean; data: string[] }>({
    isLoading: true,
    data: [],
  });
  const [isOpen, setOpen] = useState(false);
  const [input, setInput] = useState(location.name);
  const onClose = () => setOpen(false);

  useEffect(() => {
    getCitites().then((res) => {
      setCities({ data: res.data, isLoading: false });
    });
  }, []);

  return (
    <>
      {isError && (
        <p className="bg-red-300 p-3 rounded mb-5 text-dark">
          Please complete this field so we can find the best Trip Designers for
          you.
        </p>
      )}
      <h2 className="section-title-sm">Where would you like to go?</h2>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, type: "tween" }}
            className="overlay"
            onClick={onClose}
          />
        )}
      </AnimatePresence>
      <div className={`travel-form ${isOpen ? "active" : ""}`}>
        <div>
          <div className="search-wrapper">
            <DynamicIcon
              className="w-6 h-6 absolute left-2 top-1/2 -translate-y-1/2"
              icon="FaMagnifyingGlass"
            />
            <motion.input
              onFocus={() => {
                setInput("");
                setOpen(true);
              }}
              onBlur={() => {
                setInput(location.name);
              }}
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                updateFields({ location: { name: e.target.value } });
              }}
              className={`${input && !isOpen ? "text-primary" : ""}`}
              autoComplete={"off"}
              type="text"
              name="locaction"
              placeholder={isOpen ? "Try 'Barcelona'" : "Where to go?"}
            />
          </div>

          {isOpen && (
            <ul className="space-y-3">
              <li className="py-2">
                <span className="text-sm text-[#767676]">
                  POPULAR DESTINATIONS
                </span>
              </li>
              {cities.data.slice(0, 4).map((city, i) => {
                return (
                  <motion.li
                    onClick={() => {
                      setInput(city);
                      updateFields({ location: { name: city } });
                      onClose();
                    }}
                    key={i}
                    layout
                    className="cursor-pointer"
                  >
                    <p className="text-sm text-black">{city}</p>
                    <span className="text-sm text-[#767676]">
                      United States, North America
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Location;
