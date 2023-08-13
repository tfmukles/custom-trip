import { intersettodo } from "@/types";

const ActivitiesValues = ({
  selectedActivites,
}: {
  selectedActivites: intersettodo[];
}) => {
  return selectedActivites.map((item, index) => (
    <input
      key={index}
      type="hidden"
      name={`activites[${index}].label`}
      value={item.label}
    />
  ));
};

export default ActivitiesValues;
