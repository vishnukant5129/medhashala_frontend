const ModeSwitcher = ({ mode, setMode }) => {
const modes = [
"focus",
"short-break",
"long-break",
];

return (
<div className="flex gap-3 justify-center">
    {modes.map((item) => (
    <button key={item} onClick={()=> setMode(item)}
        className={`px-4 py-2 rounded-lg transition ${
        mode === item
        ? "bg-blue-600 text-white"
        : "bg-gray-200"
        }`}
        >
        {item.replace("-", " ")}
    </button>
    ))}
</div>
);
};

export default ModeSwitcher;