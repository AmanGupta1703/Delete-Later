import { ReactNode } from "react";

export type TLabelProps = {
  htmlFor: string;
  label: string;
  className?: string;
};

const Label = ({ htmlFor, className, label }: TLabelProps) => {
  // const baseStyles = "sm:text-lg md:text-xl lg:text-2xl";
  const baseStyles = "";

  return (
    <label
      className={`${
        className ? `${className} ${baseStyles}` : `text-base text-gray-800 ${baseStyles}`
      }`}
      htmlFor={htmlFor}>
      {label}
    </label>
  );
};

export default Label;
