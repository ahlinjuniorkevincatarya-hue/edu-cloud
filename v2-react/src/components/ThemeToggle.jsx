import { useContext } from "react";
import { Moon, Sun } from "lucide-react";

import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } =
    useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-11 h-11 rounded-xl border border-black/10 dark:border-white/10 bg-gray-100 dark:bg-white/5 transition-all cursor-pointer"
    >
      {darkMode ? (
        <Sun size={20} className="text-white" />
      ) : (
        <Moon size={20} className="text-black" />
      )}
    </button>
  );
};

export default ThemeToggle;