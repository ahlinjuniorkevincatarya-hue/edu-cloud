import { useState } from "react";
import { Home, Folder, Bell, Settings, User, Monitor, Menu, X, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: Home },
    { name: "Sessions", path: "/sessions", icon: Monitor },
    { name: "Files", path: "/files", icon: Folder },
    { name: "Alerts", path: "/alerts", icon: Bell },
    { name: "Profile", path: "/profile", icon: User },
    { name: "Settings", path: "/settings", icon: Settings },
];

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    return (
        <>
            {/* Bouton hamburger — mobile uniquement */}
            <button
                onClick={() => setIsOpen(true)}
                className="md:hidden fixed top-4 left-4 z-50 flex items-center justify-center w-10 h-10 rounded-xl bg-white dark:bg-[#0B0F19] border border-black/10 dark:border-white/10 text-black dark:text-white"
            >
                <Menu size={20} />
            </button>

            {/* Overlay — mobile */}
            {isOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`
                fixed md:relative z-50
                flex flex-col min-h-screen
                border-r border-black/10 dark:border-white/10
                bg-white dark:bg-[#0B0F19] text-black dark:text-white
                transition-all duration-300
                ${collapsed ? "w-20" : "w-64"}
                ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
            `}>

                {/* Header sidebar */}
                <div className="flex items-center justify-between p-6">
                    {!collapsed && (
                        <h1 className="text-xl font-bold tracking-wide">
                            <span className="text-black dark:text-white">ENSAM </span>
                            <span className="text-blue-400">CLOUD</span>
                        </h1>
                    )}
                    <div className="flex items-center gap-2 ml-auto">
                        {/* Bouton collapse — desktop */}
                        <button
                            onClick={() => setCollapsed(!collapsed)}
                            className="hidden md:flex items-center justify-center w-8 h-8 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors text-gray-500 dark:text-gray-400"
                        >
                            <ChevronRight
                                size={16}
                                className={`transition-transform duration-300 ${collapsed ? "" : "rotate-180"}`}
                            />
                        </button>
                        {/* Bouton fermer — mobile */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="md:hidden flex items-center justify-center w-8 h-8 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 text-gray-500 dark:text-gray-400"
                        >
                            <X size={16} />
                        </button>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex flex-col gap-1 px-3 flex-1">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-3 py-3 rounded-xl transition-all ${
                                        collapsed ? "justify-center" : ""
                                    } ${
                                        isActive
                                            ? "bg-blue-600 text-white"
                                            : "text-gray-600 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/5 hover:text-black dark:hover:text-white"
                                    }`
                                }
                            >
                                <Icon size={20} />
                                {!collapsed && <span className="text-sm font-medium">{item.name}</span>}
                            </NavLink>
                        );
                    })}
                </nav>

                {/* Footer sidebar */}
                {!collapsed && (
                    <div className="p-6 border-t border-black/10 dark:border-white/10">
                        <p className="text-xs text-gray-400 tracking-widest">STUDENT EDITION</p>
                    </div>
                )}

            </aside>
        </>
    );
};

export default Sidebar;