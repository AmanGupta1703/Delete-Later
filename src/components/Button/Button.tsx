import React from "react";

type TButtonTypes = "primary" | "secondary";

type TButtonProps = {
  type?: TButtonTypes;
  children: React.ReactNode;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({ type = "primary", children, onClick }: TButtonProps) => {
  const bgGradient =
    type === "primary" ? "bg-gradient-to-r from-[#305AFF] to-[#B5D2FF]" : "bg-transparent";
  const textColor = type === "primary" ? "text-white" : "text-[#305AFF]";
  const borderColor = type === "primary" ? "" : "border border-[#305AFF]";
  const hoverStyles =
    type === "primary"
      ? "hover:from-[#1E4ED8] hover:to-[#93C5FD]"
      : "hover:bg-[#305AFF] hover:text-white hover:border-transparent";

  return (
    <button
      className={`${textColor} hover:scale-95 active:scale-90 cursor-pointer ${borderColor} rounded-md text-lg py-3.5 w-full ${bgGradient} ${hoverStyles} transition-all duration-150 ease-in-out`}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
