import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

// Faux fichiers dans l'explorateur
const fakeFiles = [
    { name: "signal_processing.py", active: true },
    { name: "main.py", active: false },
    { name: "config.json", active: false },
    { name: "requirements.txt", active: false },
];

// Faux code affiché
const fakeCode = `import numpy as np
from scipy import signal

def apply_lowpass_filter(data, cutoff, fs, order=5):
    # Normalize the frequency
    nyq = 0.5 * fs
    normal_cutoff = cutoff / nyq
    b, a = signal.butter(order, normal_cutoff, btype='low',
                         analog=False)
    y = signal.lfilter(b, a, data)
    return y

if __name__ == "__main__":
    raw_data = np.random.randn(1000)
    filtered = apply_lowpass_filter(raw_data, 10, 100)
    print("Processing complete...")`;

// Étapes de chargement
const loadingSteps = [
    "Initializing cloud instance...",
    "Allocating resources (4 VCPU / 8GB RAM)...",
    "Restoring snapshot...",
    "Starting VS Code server...",
    "Ready!",
];

const Workspace = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const service = searchParams.get("service") || "vscode";

    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const [stepIndex, setStepIndex] = useState(0);
    const [activeFile, setActiveFile] = useState(fakeFiles[0]);

    // Simulation du chargement
    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                const next = prev + 2;
                // Change l'étape selon la progression
                const step = Math.floor((next / 100) * loadingSteps.length);
                setStepIndex(Math.min(step, loadingSteps.length - 1));
                if (next >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setLoading(false), 500);
                }
                return Math.min(next, 100);
            });
        }, 60);

        return () => clearInterval(interval);
    }, []);

    // ===== LOADING SCREEN =====
    if (loading) {
        return (
            <div className="min-h-screen bg-[#0B0F19] flex flex-col items-center justify-center text-white px-6">

                {/* Back */}
                <button
                    onClick={() => navigate("/dashboard")}
                    className="absolute top-6 left-6 text-gray-500 text-xs tracking-widest hover:text-white transition-colors flex items-center gap-2"
                >
                    ← BACK TO DASHBOARD
                </button>

                {/* Cancel */}
                <button
                    onClick={() => navigate("/dashboard")}
                    className="absolute top-6 right-6 px-4 py-2 border border-white/10 text-gray-400 rounded-xl text-xs hover:border-red-500 hover:text-red-400 transition-colors"
                >
                    CANCEL
                </button>

                {/* Icon */}
                <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mb-6">
                    <i className="devicon-vscode-plain text-4xl text-white" />
                </div>

                {/* Titre */}
                <span className="text-blue-400 text-xs tracking-widest uppercase mb-2">CLOUD INSTANCE</span>
                <h2 className="text-3xl font-bold mb-2">Visual Studio Code</h2>
                <p className="text-gray-500 text-sm mb-12">Starting your session on ENSAM servers...</p>

                {/* Progress bar */}
                <div className="w-full max-w-sm flex flex-col gap-3">
                    <div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-blue-500 rounded-full transition-all duration-100"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col gap-1">
                            <span className="text-blue-400 text-xs flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
                                {loadingSteps[stepIndex]}
                            </span>
                            {stepIndex > 0 && (
                                <span className="text-gray-600 text-xs">{loadingSteps[stepIndex - 1]}</span>
                            )}
                        </div>
                        <span className="text-white font-bold">{progress}%</span>
                    </div>
                </div>

                {/* Server info */}
                <div className="flex gap-6 mt-16">
                    {[
                        { label: "RAM", value: "8 GB" },
                        { label: "VCPU", value: "4" },
                        { label: "REGION", value: "MAR-CASABLANCA" },
                        { label: "LATENCY", value: "12MS" },
                    ].map((info, i) => (
                        <div key={i} className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full text-xs">
                            <span className="text-gray-500 tracking-widest">{info.label}</span>
                            <span className="text-white font-semibold">{info.value}</span>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <p className="absolute bottom-6 text-gray-700 text-xs tracking-widest">
                    ENSAM CLOUD · SECURE INFRASTRUCTURE
                </p>

            </div>
        );
    }

    // ===== VS CODE INTERFACE =====
    return (
        <div className="h-screen flex flex-col bg-[#1e1e1e] text-white overflow-hidden">

            {/* Title bar */}
            <div className="h-8 bg-[#3c3c3c] flex items-center justify-between px-4 flex-shrink-0">
                <div className="flex items-center gap-3">
                    <i className="devicon-vscode-plain text-blue-400 text-sm" />
                    <span className="text-xs text-gray-300">
                        Visual Studio Code — Projet_Signal — MAR-Casablanca
                    </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="text-blue-400">TIMER 02:44:12</span>
                    <span>RAM 2.7 GB</span>
                    <span>CPU 18%</span>
                    <button
                        onClick={() => navigate("/dashboard")}
                        className="ml-4 px-3 py-1 bg-red-600 hover:bg-red-500 text-white rounded text-xs transition-colors"
                    >
                        ✕
                    </button>
                </div>
            </div>

            {/* Tabs */}
            <div className="h-9 bg-[#252526] flex items-end flex-shrink-0">
                {fakeFiles.slice(0, 2).map((file) => (
                    <button
                        key={file.name}
                        onClick={() => setActiveFile(file)}
                        className={`px-4 h-full text-xs flex items-center gap-2 border-t transition-colors ${
                            activeFile.name === file.name
                                ? "bg-[#1e1e1e] border-blue-500 text-white"
                                : "bg-[#2d2d2d] border-transparent text-gray-500 hover:text-white"
                        }`}
                    >
                        <i className="fa-solid fa-code text-blue-400 text-xs" />
                        {file.name}
                    </button>
                ))}
            </div>

            {/* Main area */}
            <div className="flex flex-1 overflow-hidden">

                {/* Activity bar */}
                <div className="w-12 bg-[#333333] flex flex-col items-center py-3 gap-4 flex-shrink-0">
                    {[
                        "fa-solid fa-copy",
                        "fa-solid fa-magnifying-glass",
                        "fa-solid fa-code-branch",
                        "fa-solid fa-bug",
                        "fa-solid fa-puzzle-piece",
                    ].map((icon, i) => (
                        <button key={i} className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-white transition-colors">
                            <i className={`${icon} text-lg`} />
                        </button>
                    ))}
                </div>

                {/* Sidebar fichiers */}
                <div className="w-52 bg-[#252526] flex flex-col flex-shrink-0">
                    <div className="px-4 py-2 text-xs text-gray-500 tracking-widest uppercase border-b border-white/5">
                        Explorer
                    </div>
                    <div className="px-2 py-2">
                        <div className="flex items-center gap-1 px-2 py-1 text-xs text-gray-400 mb-1">
                            <i className="fa-solid fa-chevron-down text-xs" />
                            <span className="tracking-widest uppercase">Projet_Signal</span>
                        </div>
                        {fakeFiles.map((file) => (
                            <button
                                key={file.name}
                                onClick={() => setActiveFile(file)}
                                className={`w-full text-left flex items-center gap-2 px-4 py-1.5 rounded text-xs transition-colors ${
                                    activeFile.name === file.name
                                        ? "bg-[#37373d] text-white"
                                        : "text-gray-400 hover:bg-[#2a2d2e] hover:text-white"
                                }`}
                            >
                                <i className="fa-solid fa-code text-blue-400 text-xs" />
                                {file.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Éditeur de code */}
                <div className="flex-1 overflow-auto bg-[#1e1e1e]">
                    <div className="p-4 font-mono text-sm leading-6">
                        {fakeCode.split("\n").map((line, i) => (
                            <div key={i} className="flex gap-6 hover:bg-white/5 px-2 rounded">
                                <span className="text-gray-600 select-none w-6 text-right flex-shrink-0 text-xs pt-0.5">
                                    {i + 1}
                                </span>
                                <span
                                    className={`${
                                        line.startsWith("import") || line.startsWith("from")
                                            ? "text-blue-400"
                                            : line.startsWith("def ")
                                            ? "text-yellow-300"
                                            : line.startsWith("#")
                                            ? "text-green-600"
                                            : line.startsWith("    return") || line.startsWith("if ")
                                            ? "text-purple-400"
                                            : line.includes('"') || line.includes("'")
                                            ? "text-orange-300"
                                            : "text-gray-300"
                                    }`}
                                >
                                    {line || " "}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Panel droite — actions */}
                <div className="w-48 bg-[#252526] border-l border-white/5 flex flex-col flex-shrink-0">
                    <div className="px-4 py-2 text-xs text-gray-500 tracking-widest uppercase border-b border-white/5">
                        Actions
                    </div>
                    <div className="flex flex-col gap-1 p-3">
                        {[
                            { icon: "fa-solid fa-floppy-disk", label: "Save Snapshot" },
                            { icon: "fa-solid fa-clock", label: "Extend Session +2h" },
                            { icon: "fa-solid fa-arrow-up-right-from-square", label: "Open in New Tab" },
                            { icon: "fa-solid fa-download", label: "Download Files" },
                            { icon: "fa-solid fa-rotate", label: "Restart Session" },
                        ].map((action, i) => (
                            <button
                                key={i}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs text-gray-400 hover:bg-white/5 hover:text-white transition-colors text-left"
                            >
                                <i className={`${action.icon} w-4`} />
                                {action.label}
                            </button>
                        ))}
                        <div className="my-2 border-t border-white/5" />
                        <button
                            onClick={() => navigate("/dashboard")}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs text-red-400 hover:bg-red-500/10 transition-colors text-left"
                        >
                            <i className="fa-solid fa-xmark w-4" />
                            End Session
                        </button>
                    </div>
                </div>

            </div>

            {/* Status bar */}
            <div className="h-6 bg-[#007acc] flex items-center justify-between px-4 flex-shrink-0">
                <div className="flex items-center gap-4 text-xs text-white/80">
                    <span>⎇ main*</span>
                    <span>⚡ Synchronizing...</span>
                    <span>⓪ 0 △ 0</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-white/80">
                    <span>Ln 15, Col 34</span>
                    <span>UTF-8</span>
                    <span>Python 3.10.12</span>
                </div>
            </div>

        </div>
    );
};

export default Workspace;