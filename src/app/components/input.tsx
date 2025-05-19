import { ChangeEvent } from "react";

type InputBarProps = {
  type: string;
  placeholder: string;
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
};

export default function InputBar({
  type,
  placeholder,
  value,
  onChange,
  label,
}: InputBarProps) {
  return (
    <div>
      <h3>{label}</h3>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`p-3 mb-5 focus:outline-green-500 text-xl font-bold text-black transition-all duration-300 shadow-xl min-w-fit rounded-xl outline-2 focus:scale-110 focus:shadow-green-300`}
      />
    </div>
  );
}
