import { intersettodo } from "@/types";

const ActivitiesValues = ({
  selectedActivites,
}: {
  selectedActivites: intersettodo[];
}) => {
  return selectedActivites.map((item, index) => (
    <>
      <input
        key={index}
        type="hidden"
        name={`activites[${index}].label`}
        value={item.label}
      />

      {item.children && <ActivitiesValues selectedActivites={item.children} />}
    </>
  ));
};

export default ActivitiesValues;
