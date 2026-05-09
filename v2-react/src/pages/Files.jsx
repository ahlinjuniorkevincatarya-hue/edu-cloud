import { useState } from "react";
import { Download, Trash2, FolderOpen } from "lucide-react";
import { recentFiles, folders, files } from "../data/files";

const badgeColors = {
    python: "bg-blue-900/50 text-blue-400",
    excel: "bg-green-900/50 text-green-400",
    pdf: "bg-red-900/50 text-red-400",
};

const iconColors = {
    python: "bg-blue-900/30 text-blue-400",
    excel: "bg-green-900/30 text-green-400",
    pdf: "bg-red-900/30 text-red-400",
};

const Files = () => {
    const [selectedFile, setSelectedFile] = useState(files[0]);

    return (
        <div className="flex gap-6">

            {/* MAIN COLUMN */}
            <div className="flex-1 flex flex-col gap-6 min-w-0">

                {/* Recently Opened */}
                <div className="bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-4">
                    <div>
                        <span className="text-gray-500 text-xs tracking-widest uppercase block mb-1">QUICK ACCESS</span>
                        <h3 className="text-lg font-bold uppercase tracking-wide">Recently Opened</h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {recentFiles.map((file) => (
                            <div
                                key={file.id}
                                className="bg-gray-50 dark:bg-[#0d1526] border border-gray-200 dark:border-white/10 rounded-xl p-4 flex flex-col items-center gap-2 cursor-pointer hover:border-blue-500 transition-all hover:-translate-y-1"
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${file.type === "doc" ? "bg-blue-900/30 text-blue-400" : file.type === "table" ? "bg-green-900/30 text-green-400" : "bg-green-900/30 text-green-400"}`}>
                                    <i className={`${file.icon} text-xl`} />
                                </div>
                                <span className="text-xs font-medium text-center truncate w-full">{file.name}</span>
                                <span className="text-xs text-gray-500">{file.time}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Folders */}
                <div className="bg-gray-50 dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-4">
                    <div>
                        <span className="text-gray-500 text-xs tracking-widest uppercase block mb-1">WORKSPACE</span>
                        <h3 className="text-lg font-bold uppercase tracking-wide">Folders</h3>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {folders.map((folder) => (
                            <div
                                key={folder.id}
                                className="bg-gray-50 dark:bg-[#0d1526] border border-gray-200 dark:border-white/10 rounded-xl p-5 flex flex-col items-center gap-2 cursor-pointer hover:border-blue-500 transition-all hover:-translate-y-1"
                            >
                                <FolderOpen size={36} className="text-blue-500" />
                                <span className="text-sm font-semibold">{folder.name}</span>
                                <span className="text-xs text-gray-500 tracking-widest">{folder.count} ITEMS</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Files Table */}
                <div className="bg-gray-50 dark:bg-[#111827] border border-gray-200 dark:border-white/10 rounded-2xl p-5 flex flex-col gap-4">
                    <div>
                        <span className="text-gray-500 text-xs tracking-widest uppercase block mb-1">REPOSITORY</span>
                        <h3 className="text-lg font-bold uppercase tracking-wide">Files</h3>
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="grid grid-cols-[2fr_1fr_1fr_1fr_40px] px-3 py-2 text-gray-500 text-xs tracking-widest uppercase">
                            <span>NAME</span>
                            <span>SIZE</span>
                            <span>MODIFIED</span>
                            <span>TYPE</span>
                            <span />
                        </div>
                        {files.map((file) => (
                            <div
                                key={file.id}
                                onClick={() => setSelectedFile(file)}
                                className={`grid grid-cols-[2fr_1fr_1fr_1fr_40px] items-center px-3 py-3 rounded-xl cursor-pointer transition-colors ${
                                    selectedFile?.id === file.id
                                        ? "bg-[#0d1526] border-l-2 border-blue-500"
                                        : "hover:bg-white/5"
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${iconColors[file.badge]}`}>
                                        <i className={`${file.icon} text-sm`} />
                                    </div>
                                    <div>
                                        <p className="text-blue-400 text-sm">{file.name}</p>
                                        <p className="text-gray-500 text-xs">{file.path}</p>
                                    </div>
                                </div>
                                <span className="text-gray-400 text-sm">{file.size}</span>
                                <span className="text-gray-400 text-sm">{file.date}</span>
                                <span className={`text-xs font-bold tracking-widest px-2 py-1 rounded ${badgeColors[file.badge]}`}>
                                    {file.type}
                                </span>
                                <i className="fa-solid fa-ellipsis-vertical text-gray-500 cursor-pointer hover:text-white transition-colors" />
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-white/10 text-gray-500 text-xs tracking-widest">
                        <span>SHOWING 1-10 OF 128 ITEMS</span>
                        <div className="flex gap-1">
                            {["‹", "1", "2", "3", "›"].map((btn, i) => (
                                <button
                                    key={i}
                                    className={`w-8 h-8 rounded-lg border text-xs transition-colors ${
                                        btn === "1"
                                            ? "bg-blue-600 border-blue-600 text-white"
                                            : "border-white/10 text-gray-400 hover:border-blue-500 hover:text-blue-400"
                                    }`}
                                >
                                    {btn}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* RIGHT SIDEBAR */}
            <div className="hidden lg:flex flex-col gap-4 w-56 flex-shrink-0">

                {/* Preview */}
                <div className="bg-[#111827] border border-white/10 rounded-2xl h-40 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2 text-gray-600">
                        <i className="fa-solid fa-terminal text-3xl" />
                        <span className="text-xs tracking-widest">NO PREVIEW AVAILABLE</span>
                    </div>
                </div>

                {/* File Details */}
                {selectedFile && (
                    <div className="bg-[#111827] border border-white/10 rounded-2xl p-5 flex flex-col gap-4">
                        <div>
                            <h3 className="text-sm font-semibold break-all">{selectedFile.name}</h3>
                            <span className="text-blue-400 text-xs tracking-widest">{selectedFile.type} SCRIPT</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-gray-500 text-xs tracking-widest uppercase">METADATA</span>
                            {[
                                { label: "Size", value: selectedFile.size },
                                { label: "Created", value: selectedFile.created },
                                { label: "Modified", value: selectedFile.modified },
                                { label: "Owner", value: "You (Student)" },
                            ].map((row, i) => (
                                <div key={i} className="flex justify-between text-xs">
                                    <span className="text-gray-500">{row.label}</span>
                                    <span className="text-white font-medium">{row.value}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="text-gray-500 text-xs tracking-widest uppercase">CAPABILITIES</span>
                            <div className="flex flex-wrap gap-2">
                                {selectedFile.capabilities.map((cap, i) => (
                                    <span key={i} className="px-2 py-1 bg-[#0d1526] border border-white/10 rounded text-xs text-gray-400 tracking-widest">
                                        {cap}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-colors">
                            <Download size={14} />
                            Download
                        </button>
                        <button className="w-full py-2.5 border border-red-500/50 text-red-400 hover:bg-red-500 hover:text-white rounded-xl text-sm flex items-center justify-center gap-2 transition-colors">
                            <Trash2 size={14} />
                            Delete
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Files;