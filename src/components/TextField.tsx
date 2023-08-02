import React from "react";

interface TextFieldProps {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  //   onChange: any;
}

const TextField: React.FC<TextFieldProps> = ({
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border-solid border-2 border-gray-300 rounded w-8/12 px-2 py-1"
    />
  );
};

export default TextField;
