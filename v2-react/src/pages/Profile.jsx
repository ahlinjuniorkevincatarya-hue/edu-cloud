import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, ExternalLink, UserPen, ShieldCheck, Bell, FileText, CircleHelp } from "lucide-react";
import { ThemeContext } from "../context/ThemeContext";

const accountItems = [
    { icon: UserPen, label: "Edit Personal Information", desc: "Update your name, bio, and avatar", color: "bg-blue-900/30 text-blue-400" },
    { icon: ShieldCheck, label: "Security & Privacy", desc: "Two-factor auth and session logs", color: "bg-green-900/30 text-green-400" },
];

const prefItems = [
    { icon: Bell, label: "Notifications", desc: "Control email and push alerts", color: "bg-amber-900/30 text-amber-400" },
];

const supportItems = [
    { icon: FileText, label: "Documentation", color: "bg-[#0d1526] text-gray-400", external: true },
    { icon: CircleHelp, label: "Help Center", color: "bg-[#0d1526] text-gray-400" },
];

const Profile = () => {
    const navigate = useNavigate();
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">

            {/* Profile Card */}
            <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-2xl p-6 flex items-center gap-6">
                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl font-bold text-white flex-shrink-0">
                    AK
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold">Ahmed Karimi</h3>
                    <p className="text-gray-400 text-sm mt-1">ahmed.karimi@ensam-casablanca.ma</p>
                    <span className="inline-block mt-2 px-3 py-1 border border-white/10 rounded-full text-blue-400 text-xs tracking-widest">
                        DEPARTMENT OF COMPUTER ENGINEERING
                    </span>
                </div>
                <button className="px-4 py-2 border border-white/10 text-white rounded-xl text-sm hover:border-blue-500 transition-colors flex-shrink-0">
                    Edit Profile
                </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* Account */}
                <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-2">
                    <span className="text-gray-500 text-xs tracking-widest uppercase mb-2">ACCOUNT</span>
                    {accountItems.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-blue-200 dark:hover:bg-white/5 cursor-pointer transition-colors">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                                    <Icon size={18} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium">{item.label}</p>
                                    <p className="text-gray-500 text-xs">{item.desc}</p>
                                </div>
                                <ChevronRight size={16} className="text-gray-500" />
                            </div>
                        );
                    })}
                </div>

                {/* Preferences */}
                <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-2">
                    <span className="text-gray-500 text-xs tracking-widest uppercase mb-2">PREFERENCES</span>

                    {/* Dark mode toggle */}
                    <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-blue-200 dark:hover:bg-white/5 transition-colors">
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-purple-900/30 text-purple-400 flex-shrink-0">
                            <i className="fa-solid fa-moon text-sm" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-medium">Dark Mode</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                checked={darkMode}
                                onChange={toggleTheme}
                                className="sr-only peer"
                            />
                            <div className="w-11 h-6 bg-gray-500 dark:bg-white/10 peer-checked:bg-blue-600 rounded-full transition-colors" />
                            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform peer-checked:translate-x-5" />
                        </label>
                    </div>

                    {prefItems.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-blue-200 dark:hover:bg-white/5 cursor-pointer transition-colors">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                                    <Icon size={18} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium">{item.label}</p>
                                    <p className="text-gray-500 text-xs">{item.desc}</p>
                                </div>
                                <ChevronRight size={16} className="text-gray-500" />
                            </div>
                        );
                    })}
                </div>

                {/* Support */}
                <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-2">
                    <span className="text-gray-500 text-xs tracking-widest uppercase mb-2">SUPPORT</span>
                    {supportItems.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <div key={i} className="flex items-center gap-4 p-3 rounded-xl hover:bg-blue-100 dark:hover:bg-white/5 cursor-pointer transition-colors">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}>
                                    <Icon size={18} />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium">{item.label}</p>
                                </div>
                                {item.external
                                    ? <ExternalLink size={16} className="text-gray-500" />
                                    : <ChevronRight size={16} className="text-gray-500" />
                                }
                            </div>
                        );
                    })}
                </div>

                {/* Danger Zone */}
                <div className="bg-white dark:bg-[#111827] border border-red-500 dark:border-red-500/20 rounded-2xl p-5 flex flex-col gap-2">
                    <span className="text-red-400 text-xs tracking-widest uppercase mb-2">DANGER ZONE</span>
                    <div
                        onClick={() => navigate("/")}
                        className="flex items-center gap-4 p-3 rounded-xl hover:bg-red-100 dark:hover:bg-red-500/10 cursor-pointer transition-colors"
                    >
                        <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-red-900/30 text-red-400 flex-shrink-0">
                            <i className="fa-solid fa-right-from-bracket text-sm" />
                        </div>
                        <div className="flex-1">
                            <p className="text-sm font-medium text-red-400">Sign Out</p>
                            <p className="text-gray-500 text-xs">End your current session safely</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Footer */}
            <p className="text-center text-gray-600 text-xs tracking-widest">
                ENSAM CLOUD BUILD 2.4.0-STABLE — LAST LOGIN: 2023-10-24 14:22 GMT
            </p>

        </div>
    );
};

export default Profile;