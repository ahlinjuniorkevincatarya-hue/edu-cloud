export const activeSessions = [
    {
        id: 1,
        name: "VS Code",
        project: "Projet_Signal",
        icon: "devicon-vscode-plain",
        color: "#007ACC",
        meta: "MAR-CASABLANCA · 4 VCPU · 8 GB RAM",
        timer: "02:44:12",
        limit: "03:00:00",
        status: "running"
    },
    {
        id: 2,
        name: "Jupyter Lab",
        project: "DataAnalysis_v2",
        icon: "devicon-jupyter-plain",
        color: "#F37626",
        meta: "MAR-CASABLANCA · 2 VCPU · 4 GB RAM",
        timer: "00:15:45",
        limit: "02:00:00",
        status: "running"
    }
]

export const recentSessions = [
    {
        id: 1,
        name: "VS Code",
        file: "SIGNAL_PROCESSING.PY",
        icon: "devicon-vscode-plain",
        duration: "1h 45m",
        status: "saved"
    },
    {
        id: 2,
        name: "PostgreSQL Client",
        file: "DB_DUMP_MAIN.SQL",
        icon: "fa-solid fa-database",
        duration: "0h 28m",
        status: "saved"
    }
]

export const quotaData = {
    storage: { used: 68.2, total: 100, unit: "GB" },
    ram: { used: 4.1, total: 16, unit: "GB" },
    computeTime: { used: 80, total: 100, unit: "%" }
}

export const monthStats = {
    totalSessions: 47,
    computeTime: "38h 30m",
    topApp: "VS Code"
}