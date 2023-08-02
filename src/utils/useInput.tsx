import React, { useState } from "react";

const useInput = (defaultValue = "") => {
  const [value, setValue] = useState<string>(defaultValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return { value, handleChange, setValue };
};

export default useInput;
