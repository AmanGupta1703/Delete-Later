import { ReactNode } from "react";

type TFormGroupProps = {
  children: ReactNode;
  className?: string;
  error?: string;
};

const FormGroup = ({ children, className, error }: TFormGroupProps) => {
  return (
    <div className={`${className ? `${className}` : "flex flex-col space-y-2"}`}>
      {children}
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default FormGroup;
