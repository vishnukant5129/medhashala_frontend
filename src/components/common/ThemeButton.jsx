import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext.jsx"

function ThemeButton() {
    const { darkMode, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800"
        >
            {darkMode ? <FaSun /> : <FaMoon />}
        </button>
    );
}

export default ThemeButton;