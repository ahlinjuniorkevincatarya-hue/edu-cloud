import { useNavigate } from "react-router-dom";
import { ArrowLeft, Settings, User } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Topbar = ({ title, showBack = true }) => {
    const navigate = useNavigate();

    return (
        <header className="h-16 border-b border-gray-200 dark:border-white/10 pl-16 md:pl-6 pr-6 flex items-center justify-between bg-white dark:bg-[#0B0F19] transition-colors">
            
            {/* Gauche — flèche retour */}
            {showBack ? (
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                    <ArrowLeft size={18} />
                    {/*<span className="text-sm">Dashboard</span>*/}
                </button>
            ) : (
                <div />
            )}

            {/* Centre — titre */}
            <h2 className="text-base font-semibold text-black dark:text-white">
                {title}
            </h2>

            {/* Droite — actions */}
            <div className="flex items-center gap-3">
                <ThemeToggle />
                <button
                    onClick={() => navigate("/profile")}
                    className="flex items-center justify-center w-9 h-9 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-500 transition-colors"
                >
                    AK
                </button>
                <button
                    onClick={() => navigate("/settings")}
                    className="flex items-center justify-center w-9 h-9 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
                >
                    <Settings size={16} />
                </button>
            </div>

        </header>
    );
};

export default Topbar;