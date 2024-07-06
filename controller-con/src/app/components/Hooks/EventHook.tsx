import { useCallback } from "react";
import { ChangeEvent } from "react";

// Define a more specific type for the form values
type FormValues = Record<string, string | boolean>;

// deprecated code. Use TanStack Form instead
export default function HandleFormState(
  values: FormValues,
  setValues: React.Dispatch<React.SetStateAction<FormValues>>
) {
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }, []);

  const handleChangeBoolean = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  }, []);
 
  const TypeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.type === "checkbox") {
      handleChangeBoolean(e);
    } else {
      handleChange(e);
    }
  }

  return TypeHandler;
}
