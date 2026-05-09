import { useState } from "react";
import { alerts as initialAlerts } from "../data/alerts";
import { X } from "lucide-react";

const tabs = ["all", "unread", "system", "session", "quota"];

const iconColors = {
    red: "bg-red-900/30 text-red-400",
    amber: "bg-amber-900/30 text-amber-400",
    blue: "bg-blue-900/30 text-blue-400",
    green: "bg-green-900/30 text-green-400",
};

const Alerts = () => {
    const [activeTab, setActiveTab] = useState("all");
    const [alertList, setAlertList] = useState(initialAlerts);

    const filtered = alertList.filter((a) => {
        if (activeTab === "all") return true;
        if (activeTab === "unread") return a.unread;
        return a.type === activeTab;
    });

    const dismiss = (id) => {
        setAlertList((prev) => prev.filter((a) => a.id !== id));
    };

    const markAllRead = () => {
        setAlertList((prev) => prev.map((a) => ({ ...a, unread: false })));
    };

    return (
        <div className="w-full max-w-4xl flex flex-col gap-6">

            {/* Header */}
            <div className="flex flex-wrap justify-between items-center gap-3">
                <div className="flex flex-wrap gap-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-4 py-2 rounded-lg text-sm capitalize transition-colors ${
                                activeTab === tab
                                    ? "bg-blue-600 text-white"
                                    : "border border-white/10 text-gray-400 hover:border-blue-500 hover:text-blue-400"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <button
                    onClick={markAllRead}
                    className="px-4 py-2 border border-white/10 text-gray-400 rounded-lg text-sm hover:border-blue-500 hover:text-blue-400 transition-colors"
                >
                    Mark all as read
                </button>
            </div>

            {/* Alerts List */}
            <div className="flex flex-col gap-3">
                {filtered.length === 0 ? (
                    <div className="text-center text-gray-500 py-12">No alerts found.</div>
                ) : (
                    filtered.map((alert) => (
                        <div
                            key={alert.id}
                            className={`flex items-start gap-4 p-4 bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-2xl transition-colors ${
                                alert.unread ? "border-l-4 border-l-blue-500 border-white/10" : "border-white/10"
                            } hover:border-blue-500`}
                        >
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${iconColors[alert.color]}`}>
                                <i className={`${alert.icon} text-sm`} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold">{alert.title}</p>
                                <p className="text-gray-400 text-sm mt-1 leading-relaxed">{alert.desc}</p>
                                <p className="text-gray-600 text-xs tracking-widest mt-2">{alert.time}</p>
                            </div>
                            <div className="flex items-center gap-3 flex-shrink-0">
                                {alert.unread && (
                                    <span className="w-2 h-2 bg-blue-500 rounded-full block" />
                                )}
                                <button
                                    onClick={() => dismiss(alert.id)}
                                    className="text-gray-500 hover:text-red-400 transition-colors"
                                >
                                    <X size={16} />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Alerts;