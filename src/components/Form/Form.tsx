import { ReactNode } from "react";

type TFormProps = {
  children: ReactNode;
  onSubmit: (ev: React.FormEvent<HTMLFormElement>) => void;
};

const Form = ({ children, onSubmit }: TFormProps) => {
  return (
    <form className="rounded-xl" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
