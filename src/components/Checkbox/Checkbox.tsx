type TCheckboxProps = {
  name: string;
  checked: boolean;
  onChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox = ({ name, checked, onChange }: TCheckboxProps) => {
  return (
    <input
      name={name}
      id={name}
      type="checkbox"
      className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 hover:cursor-pointer checked:bg-blue-600 checked:border-transparent"
      checked={checked}
      onChange={onChange}
    />
  );
};

export default Checkbox;
