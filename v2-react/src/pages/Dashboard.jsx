import { useNavigate } from "react-router-dom";
import { services } from "../data/services";
import { Files, RefreshCw, Users, Headphones } from "lucide-react";

const workspaceData = {
    name: "Deep Learning Lab 04",
    status: "ACTIVE",
    uptime: "04:12:33",
    gpuUsage: "88%",
};

const quotaData = [
    { label: "COMPUTE THREADS", value: "12 / 16", percent: 75, color: "bg-blue-500" },
    { label: "GPU VRAM", value: "4.1 / 8 GB", percent: 51, color: "bg-green-500" },
    { label: "NETWORK BANDWIDTH", value: "0.8 / 1 Gbps", percent: 80, color: "bg-gray-400" },
];

const recentHistory = [
    { name: "Final Project Compiler", app: "VS CODE", date: "YESTERDAY", size: "2.4 GB", status: "Archived", statusColor: "text-gray-400", icon: "devicon-vscode-plain", color: "#007ACC" },
    { name: "Neural Net Training", app: "JUPYTER", date: "OCT 24", size: "12.1 GB", status: "Snapshot", statusColor: "text-green-400", icon: "devicon-jupyter-plain", color: "#F37626" },
    { name: "Control Systems Lab", app: "MATLAB", date: "OCT 22", size: "1.8 GB", status: "Expired", statusColor: "text-red-400", icon: "devicon-matlab-plain", color: "#e16737" },
];

const quickActions = [
    { icon: Files, label: "New File" },
    { icon: RefreshCw, label: "Sync All" },
    { icon: Users, label: "Collab" },
    { icon: Headphones, label: "Support" },
];

const Dashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col md:flex-row gap-6">

            {/* CENTER COLUMN */}
            <div className="flex-1 flex flex-col gap-6 min-w-0">

                {/* Alert Banner */}
                <div className="flex items-center gap-3 px-4 py-3 bg-red-50 dark:bg-red-500/10 border border-red-300 dark:border-red-500/30 rounded-xl text-red-600 dark:text-red-400 text-sm">
                    <i className="fa-solid fa-circle-exclamation flex-shrink-0" />
                    <span className="flex-1">System Maintenance: MAR-Casablanca node will be offline for 15 minutes starting at 02:00 AM UTC.</span>
                    <i className="fa-solid fa-xmark cursor-pointer hover:opacity-70 flex-shrink-0" />
                </div>

                {/* Workspace Card */}
                <div className="bg-gradient-to-br from-[#1a2a4a] to-[#0d1f3c] border border-white/10 rounded-2xl p-6 flex justify-between items-end">
                    <div>
                        <span className="text-gray-400 text-xs tracking-widest uppercase block mb-2">CURRENT WORKSPACE</span>
                        <h3 className="text-2xl font-bold mb-4 text-white">{workspaceData.name}</h3>
                        <div className="flex gap-8">
                            <div>
                                <span className="text-gray-400 text-xs tracking-widest uppercase block mb-1">UPTIME</span>
                                <span className="text-xl font-bold text-white">{workspaceData.uptime}</span>
                            </div>
                            <div>
                                <span className="text-gray-400 text-xs tracking-widest uppercase block mb-1">GPU USAGE</span>
                                <span className="text-xl font-bold text-white">{workspaceData.gpuUsage}</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-end gap-4">
                        <span className="text-green-400 text-xs font-bold tracking-widest">● {workspaceData.status}</span>
                        <button className="px-5 py-3 bg-white text-[#0B0F19] rounded-xl font-bold text-sm hover:bg-gray-100 transition-colors">
                            Open Terminal
                        </button>
                    </div>
                </div>

                {/* Start New Session */}
                <div>
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Start New Session</h3>
                        <button
                            onClick={() => navigate("/sessions")}
                            className="text-blue-500 text-xs tracking-widest hover:underline"
                        >
                            VIEW TEMPLATES
                        </button>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {services.slice(0, 4).map((service) => (
                            <div
                                key={service.id}
                                onClick={() => navigate("/sessions")}
                                className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-xl p-4 flex flex-col items-center gap-2 cursor-pointer hover:border-blue-500 transition-all hover:-translate-y-1"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-[#0d1526] flex items-center justify-center">
                                    <i className={`${service.icon} text-2xl`} style={{ color: service.color }} />
                                </div>
                                <span className="text-sm font-semibold text-black dark:text-white">{service.name}</span>
                                <span className="text-xs text-gray-500 tracking-widest">{service.type}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent History */}
                <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-2xl p-5">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-black dark:text-white">Recent History</h3>
                        <i className="fa-solid fa-clock-rotate-left text-gray-400 cursor-pointer hover:text-black dark:hover:text-white transition-colors" />
                    </div>
                    <div className="flex flex-col gap-2">
                        {recentHistory.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-colors cursor-pointer"
                            >
                                <div className="w-10 h-10 bg-gray-100 dark:bg-[#0d1526] rounded-lg flex items-center justify-center flex-shrink-0">
                                    <i className={`${item.icon} text-lg`} style={{ color: item.color }} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-black dark:text-white truncate">{item.name}</p>
                                    <p className="text-xs text-gray-500 tracking-widest">{item.app} · {item.date}</p>
                                </div>
                                <span className="text-sm text-gray-500 flex-shrink-0">{item.size}</span>
                                <span className={`text-xs font-semibold flex-shrink-0 ${item.statusColor}`}>{item.status}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-4 md:w-72 md:flex-shrink-0">

                {/* Cloud Quota */}
                <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-4">
                    <h3 className="text-base font-semibold text-black dark:text-white">Cloud Quota</h3>
                    {quotaData.map((item, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-500 text-xs tracking-widest uppercase">{item.label}</span>
                                <span className="text-xs font-semibold text-black dark:text-white">{item.value}</span>
                            </div>
                            <div className="w-full h-1 bg-gray-200 dark:bg-white/10 rounded-full">
                                <div
                                    className={`h-full rounded-full ${item.color}`}
                                    style={{ width: `${item.percent}%` }}
                                />
                            </div>
                        </div>
                    ))}
                    <button className="w-full py-2.5 bg-transparent border border-blue-500 text-blue-500 rounded-xl text-sm hover:bg-blue-500 hover:text-white transition-colors">
                        Request Extension
                    </button>
                </div>

                {/* Infrastructure */}
                <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                        <h3 className="text-base font-semibold text-black dark:text-white">Infrastructure</h3>
                        <span className="text-green-500 text-xs font-bold tracking-widest">● STABLE</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-100 dark:bg-[#0d1526] rounded-lg flex items-center justify-center">
                            <i className="fa-solid fa-globe text-gray-400 text-sm" />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-black dark:text-white">MAR-Casablanca</p>
                            <p className="text-xs text-gray-500">Latency: 12ms · Lat: 33.57 Lon: -7.58</p>
                        </div>
                    </div>
                    <div className="w-full h-1 bg-gray-200 dark:bg-white/10 rounded-full">
                        <div className="h-full w-[99%] bg-green-500 rounded-full" />
                    </div>
                    <span className="text-gray-500 text-xs tracking-widest text-center">99.98% UPTIME LAST 24H</span>
                </div>

                {/* Quick Actions */}
                <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-4">
                    <h3 className="text-base font-semibold text-black dark:text-white">Quick Actions</h3>
                    <div className="grid grid-cols-2 gap-3">
                        {quickActions.map((action, index) => {
                            const Icon = action.icon;
                            return (
                                <button
                                    key={index}
                                    className="flex flex-col items-center gap-2 p-4 bg-gray-50 dark:bg-[#0d1526] border border-gray-200 dark:border-white/10 rounded-xl hover:border-blue-500 transition-all cursor-pointer"
                                >
                                    <Icon size={20} className="text-gray-400" />
                                    <span className="text-xs text-gray-500">{action.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;