import React from "react";

export type TInputProps = {
  type?: string;
  name: string;
  placeholder: string;
  value: string;
  disabled?: boolean;

  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  type = "text",
  name,
  placeholder,
  value,
  disabled = false,
  onChange,
}: TInputProps) => {
  return (
    <input
      disabled={disabled}
      type={type}
      className="border text-sm sm:text-base border-gray-400 p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
      name={name}
      id={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
