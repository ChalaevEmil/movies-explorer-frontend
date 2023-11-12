import { useState, useCallback } from "react";

export function useFormWithValidation() {
  const [values, setFormValues] = useState({});
  const [errorsMessages, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState({});

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setFormValues({ ...values, [name]: value });
    setErrors({ ...errorsMessages, [name]: target.validationMessage });
    setIsFormValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newformValues = {}, newErrors = {}, newIsFormValid = false) => {
      setFormValues(newformValues);
      setErrors(newErrors);
      setIsFormValid(newIsFormValid);
    },
    [setFormValues, setErrors, setIsFormValid]
  );

  return { values, handleChange, errorsMessages, isFormValid, resetForm };
}
