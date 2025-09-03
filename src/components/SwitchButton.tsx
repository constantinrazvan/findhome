"use client";

type SwitchButtonProps = {
  active: "all" | "houses" | "apartments";
  setActive: (value: "all" | "houses" | "apartments") => void;
};

const SwitchButton = ({ active, setActive }: SwitchButtonProps) => {
  const buttons = [
    { id: 1, label: "All", value: "all" },
    { id: 2, label: "Houses", value: "houses" },
    { id: 3, label: "Apartments", value: "apartments" },
  ];

  return (
    <div className="flex bg-gray-100 rounded-xl p-1 shadow-md w-fit">
      {buttons.map((btn) => (
        <button
          key={btn.id}
          onClick={() => setActive(btn.value as "all" | "houses" | "apartments")}
          className={`px-6 py-2 rounded-lg font-semibold transition-all ${
            active === btn.value
              ? "bg-emerald-500 text-white shadow"
              : "text-gray-600 hover:text-emerald-500"
          }`}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default SwitchButton;