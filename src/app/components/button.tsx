type PageButtonProps = {
  onClick: () => void;
  label: string;
  disabled?: boolean;
  variant: "add" | "remove" | "clear" | "copy" | "reset" | "update";
};

export default function PageButton({
  onClick,
  label,
  disabled = false,
  variant,
}: PageButtonProps) {
  const variantColor = {
    add: "hover:bg-green-300",
    remove: "hover:bg-red-300",
    clear: "hover:bg-yellow-400",
    copy: "hover:bg-gray-400",
    reset: "hover:bg-red-600",
    update: "hover:bg-green-500",
  };

  const hoverClass = variantColor[variant];

  return (
    <button
      onClick={onClick}
      className={`p-3 m-3 text-xl font-bold text-center text-black transition-all bg-gray-300 outline-4 rounded-2xl sm:text-2xl ${
        disabled
          ? "grayscale opacity-25 cursor-not-allowed"
          : `${hoverClass} hover:scale-120 active:scale-80`
      }`}
    >
      {label}
    </button>
  );
}
