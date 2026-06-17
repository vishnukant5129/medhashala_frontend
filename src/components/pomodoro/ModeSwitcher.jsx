const ModeSwitcher = ({ mode, setMode }) => {
  const modes = ["focus", "short-break", "long-break"];

  return (
    <div className="flex gap-3 justify-center">
      {modes.map((item) => (
        <button
          key={item}
          onClick={() => setMode(item)}
          className={`
            px-5 py-2.5
            rounded-2xl
            font-medium
            transition-all duration-300

            ${
              mode === item
                ? "bg-[#F4B400] text-[#0B1F3A]"
                : "bg-[#F1F5F9] text-gray-600 hover:bg-[#E2E8F0]"
            }
          `}
        >
          {item.replace("-", " ")}
        </button>
      ))}
    </div>
  );
};

export default ModeSwitcher;