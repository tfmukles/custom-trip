import { useState } from "react";
export const useForm = <T>({ initialState }: { initialState: T }) => {
  const [formData, setFormData] = useState<T>(initialState);
  const [isError, setError] = useState<boolean>(false);

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onUpdate = (updatedState: any) => {
    setFormData({ ...formData, ...updatedState });
  };

  //Please complete this field so we can find the best Trip Designers for you.

  const validateCheck = () => {
    let isError = Object.values(formData as any).some((value: any) => {
      if (typeof value === "string" && value.trim() === "") {
        return true; // Empty string
      }
      if (Array.isArray(value) && value.length === 0) {
        return true; // Empty array
      }
      if (typeof value === "object" && Object.keys(value).length === 0) {
        if (value instanceof Date) {
          return false; // Non-empty Date object
        }
        return true; // Empty object (excluding Date)
      }
      if (value instanceof Date) {
        return false; // Non-empty Date object
      }

      return false; // None of the above conditions
    });
    setError(isError);
    return isError;
  };

  return { formData, isError, onChange, onUpdate, validateCheck };
};
