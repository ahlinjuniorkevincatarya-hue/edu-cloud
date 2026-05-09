import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Settings = () => {
    const {darkMode, toggleTheme } = useContext(ThemeContext)
    const [theme, setTheme] = useState(darkMode?"dark" : "light");
    const [language, setLanguage] = useState("English");
    const [sessionDuration, setSessionDuration] = useState("2 hours");
    const [toggles, setToggles] = useState({
        emailNotifs: true,
        pushNotifs: false,
        sessionExpiry: true,
        autoSave: true,
        twoFactor: false,
    });

    const handleToggle = (key) => {
        setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const Toggle = ({ checked, onChange }) => (
    <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" checked={checked} onChange={onChange} className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-500 dark:bg-white/10 peer-checked:bg-blue-600 rounded-full transition-colors" />
        <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white dark:bg-white rounded-full shadow transition-transform peer-checked:translate-x-5" />
    </label>
    )   ;

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-4">

            {/* Appearance */}
            <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-1">
                <span className="text-gray-500 text-xs tracking-widest uppercase mb-3">APPEARANCE</span>

                <div className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                    <div>
                        <p className="text-sm font-medium">Theme</p>
                        <p className="text-gray-500 text-xs">Choose your preferred theme</p>
                    </div>
                    <div className="flex gap-2">
                        {["dark", "light", "system"].map((t) => (
                            <button
                                key={t}
                                onClick={() => {setTheme(t)
                                    if (t === "dark" && !darkMode) toggleTheme()
                                    if (t === "light" && darkMode) toggleTheme()

                                }}
                                className={`px-3 py-1.5 rounded-lg text-sm capitalize transition-colors ${
                                    theme === t
                                        ? "bg-blue-600 text-white"
                                        : "border border-white/10 text-gray-400 hover:border-blue-500"
                                }`}
                            >
                                {t}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <div>
                        <p className="text-sm font-medium">Language</p>
                        <p className="text-gray-500 text-xs">Select your interface language</p>
                    </div>
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="px-3 py-2 bg-gray-500 dark:bg-[#0d1526] border border-gray-100 dark:border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                    >
                        <option>English</option>
                        <option>Français</option>
                        <option>العربية</option>
                    </select>
                </div>
            </div>

            {/* Notifications */}
            <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-1">
                <span className="text-gray-500 text-xs tracking-widest uppercase mb-3">NOTIFICATIONS</span>
                {[
                    { key: "emailNotifs", label: "Email Notifications", desc: "Receive session and quota alerts by email" },
                    { key: "pushNotifs", label: "Push Notifications", desc: "Browser push notifications" },
                    { key: "sessionExpiry", label: "Session Expiry Warning", desc: "Alert 15 minutes before session ends" },
                ].map((item) => (
                    <div key={item.key} className="flex items-center justify-between p-3 rounded-xl hover:bg-blue-100 dark:hover:bg-white/5 transition-colors">
                        <div>
                            <p className="text-sm font-medium">{item.label}</p>
                            <p className="text-gray-500 text-xs">{item.desc}</p>
                        </div>
                        <Toggle checked={toggles[item.key]} onChange={() => handleToggle(item.key)} />
                    </div>
                ))}
            </div>

            {/* Session */}
            <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-1">
                <span className="text-gray-500 text-xs tracking-widest uppercase mb-3">SESSION</span>

                <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <div>
                        <p className="text-sm font-medium">Default Session Duration</p>
                        <p className="text-gray-500 text-xs">Maximum time per session</p>
                    </div>
                    <select
                        value={sessionDuration}
                        onChange={(e) => setSessionDuration(e.target.value)}
                        className="px-3 py-2 bg-blue-500 dark:bg-[#0d1526] border border-gray-200 dark:border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500"
                    >
                        <option>1 hour</option>
                        <option>2 hours</option>
                        <option>3 hours</option>
                        <option>4 hours</option>
                    </select>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <div>
                        <p className="text-sm font-medium">Auto-save Snapshots</p>
                        <p className="text-gray-500 text-xs">Automatically save session every 30 min</p>
                    </div>
                    <Toggle checked={toggles.autoSave} onChange={() => handleToggle("autoSave")} />
                </div>
            </div>

            {/* Security */}
            <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-1">
                <span className="text-gray-500 text-xs tracking-widest uppercase mb-3">SECURITY</span>

                <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <div>
                        <p className="text-sm font-medium">Two-Factor Authentication</p>
                        <p className="text-gray-500 text-xs">Add an extra layer of security</p>
                    </div>
                    <Toggle checked={toggles.twoFactor} onChange={() => handleToggle("twoFactor")} />
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors">
                    <div>
                        <p className="text-sm font-medium">Active Sessions</p>
                        <p className="text-gray-500 text-xs">Manage your connected devices</p>
                    </div>
                    <button className="px-4 py-2 border border-white/10 text-gray-400 rounded-xl text-sm hover:border-blue-500 hover:text-blue-400 transition-colors">
                        Manage
                    </button>
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-semibold transition-colors">
                    Save Changes
                </button>
                <button className="px-6 py-3 border border-white/10 text-gray-400 hover:border-red-500 hover:text-red-400 rounded-xl text-sm transition-colors">
                    Reset to Default
                </button>
            </div>

        </div>
    );
};

export default Settings;