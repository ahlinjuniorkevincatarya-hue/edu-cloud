import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { activeSessions, recentSessions, quotaData, monthStats } from "../data/sessions";
import { services } from "../data/services";
import { Rocket } from "lucide-react";

const Sessions = () => {
    const navigate = useNavigate()
    const [sessions, setSessions] = useState(activeSessions);

    return (
        <div className="flex flex-col md:flex-row gap-6">

            {/* LEFT COLUMN */}
            <div className="flex-1 flex flex-col gap-6 min-w-0">

                {/* Running Now */}
                <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-4">
                    <span className="text-black-500 font-semibold text-xs tracking-widest uppercase">RUNNING NOW</span>
                    {sessions.map((session) => (
                        <div key={session.id} className="bg-gray-50 dark:bg-[#0d1526] border border-gray-200 dark:border-white/10 rounded-xl p-4 flex items-center gap-4">
                            <div className="w-12 h-12 bggray-100 dark:bg-[#0B0F19] rounded-xl flex items-center justify-center flex-shrink-0">
                                <i className={`${session.icon} text-2xl`} style={{ color: session.color }} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-base font-semibold">{session.name}</h3>
                                <p className="text-gray-400 text-sm">{session.project}</p>
                                <p className="text-gray-600 text-xs tracking-widest mt-1">{session.meta}</p>
                            </div>
                            <div className="flex flex-col items-end gap-1">
                                <span className="text-blue-600 dark:text-blue-400 text-xl font-bold font-mono">{session.timer}</span>
                                <span className="text-gray-600 text-xs">OF {session.limit} LIMIT</span>
                                <span className="text-green-400 text-xs font-bold">● RUNNING</span>
                            </div>
                            <button 
                                onClick={() => navigate("/workspace?service=vscode")}
                                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-semibold transition-colors flex-shrink-0">
                                Connect
                            </button>
                        </div>
                    ))}
                </div>

                {/* Daily Usage */}
                <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-2xl p-5">
                    <div className="flex justify-between items-center mb-3">
                        <span className="text-black-500 font-semibold text-xs tracking-widest uppercase">DAILY TIME USAGE</span>
                        <span className="text-sm font-semibold">4h 15m / 8h 00m</span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-200 dark:bg-white/10 rounded-full">
                        <div className="h-full w-[53%] bg-blue-500 rounded-full" />
                    </div>
                </div>

                {/* Start a Session */}
                <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-3">
                    <span className="text-black-500 font-semibold text-xs tracking-widest uppercase">START A SESSION</span>
                    <div className="flex flex-col gap-2">
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className="flex items-center gap-3 p-3 bg-white dark:bg-[#0d1526] rounded-xl cursor-pointer hover:bg-gray-100 dark:hover:bg-[#0B0F19] transition-colors"
                            >
                                <i className={`${service.icon} text-xl`} style={{ color: service.color }} />
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium">{service.name}</p>
                                    <p className="text-xs text-gray-500">{service.specs}</p>
                                </div>
                                <Rocket size={14} className="text-blue-400" />
                            </div>
                        ))}
                    </div>
                    <button className="w-full py-2.5 border border-white/10 text-gray-400 rounded-xl text-xs tracking-widest hover:border-blue-500 hover:text-blue-400 transition-colors">
                        BROWSE ALL TOOLS
                    </button>
                </div>

            </div>

            {/* RIGHT COLUMN */}
            <div className="flex flex-col gap-4 md:w-72 md:flex-shrink-0 min-w-0">

                {/* Quota Overview */}
                <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-3">
                    <span className="text-black-500 text-xs tracking-widest uppercase font-semibold">QUOTA OVERVIEW</span>
                    <div className="flex flex-col gap-3">
                        <div>
                            <div className="flex justify-between mb-1.5">
                                <span className="text-sm flex items-center gap-2">
                                    <i className="fa-solid fa-triangle-exclamation text-red-400 text-xs" />
                                    Storage
                                </span>
                                <span className="text-xs font-semibold">{quotaData.storage.used} GB / {quotaData.storage.total} GB</span>
                            </div>
                            <div className="w-full h-1.5 bg-white/10 rounded-full">
                                <div className="h-full bg-red-500 rounded-full" style={{ width: `${(quotaData.storage.used / quotaData.storage.total) * 100}%` }} />
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-1.5">
                                <span className="text-sm">RAM</span>
                                <span className="text-xs font-semibold">{quotaData.ram.used} GB / {quotaData.ram.total} GB</span>
                            </div>
                            <div className="w-full h-1.5 bg-white/10 rounded-full">
                                <div className="h-full bg-blue-500 rounded-full" style={{ width: `${(quotaData.ram.used / quotaData.ram.total) * 100}%` }} />
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between mb-1.5">
                                <span className="text-sm">Compute Time</span>
                                <span className="text-xs font-semibold">{quotaData.computeTime.used}% Usage</span>
                            </div>
                            <div className="w-full h-1.5 bg-white/10 rounded-full">
                                <div className="h-full bg-purple-500 rounded-full" style={{ width: `${quotaData.computeTime.used}%` }} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Server Status */}
                <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-3">
                    <span className="text-black-500 text-xs tracking-widest uppercase font-semibold">SERVER STATUS</span>
                    <div className="bg-gray-100 dark:bg-[#0d1526] rounded-xl p-4 flex flex-col gap-4">
                        <div className="flex items-center gap-3">
                            <i className="fa-solid fa-server text-gray-400" />
                            <span className="text-sm font-semibold flex-1">MAR-Casablanca</span>
                            <span className="text-green-400 text-xs font-bold">● ACTIVE</span>
                        </div>
                        <div className="flex justify-around">
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-gray-500 text-xs tracking-widest uppercase">LATENCY</span>
                                <span className="text-2xl font-bold">12ms</span>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                                <span className="text-gray-500 text-xs tracking-widest uppercase">UPTIME</span>
                                <span className="text-2xl font-bold">99.8%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* This Month */}
                <div className="bgwhite dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-3">
                    <span className="text-black-500 text-xs tracking-widest uppercase font-semibold">THIS MONTH</span>
                    <div className="flex flex-col gap-3">
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Total Sessions</span>
                            <span className="font-semibold">{monthStats.totalSessions}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Compute Time</span>
                            <span className="font-semibold">{monthStats.computeTime}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-gray-400">Top App</span>
                            <span className="text-blue-400 font-semibold">{monthStats.topApp}</span>
                        </div>
                    </div>
                </div>

                {/* Recent History */}
                <div className="bgwhite dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-3">
                    <span className="text-black-500 font-semibold text-xs tracking-widest uppercase">RECENT HISTORY</span>
                    {recentSessions.map((session) => (
                        <div key={session.id} className="flex items-center gap-4 p-3 bg-white dark:bg-[#0d1526] rounded-xl">
                            <div className="w-10 h-10 bg-gray-100 dark:bg-[#0B0F19] rounded-lg flex items-center justify-center flex-shrink-0">
                                <i className={`${session.icon} text-lg text-blue-400`} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">{session.name}</p>
                                <p className="text-xs text-gray-500 tracking-widest truncate">{session.file}</p>
                            </div>
                            <span className="text-gray-400 text-sm">{session.duration}</span>
                            <span className="text-green-400 text-xs font-bold flex-shrink-0">SAVED</span>
                            <button className="px-4 py-2 border border-blue-500 text-blue-400 rounded-lg text-xs font-semibold hover:bg-blue-500 hover:text-white transition-colors flex-shrink-0">
                                Resume
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sessions;