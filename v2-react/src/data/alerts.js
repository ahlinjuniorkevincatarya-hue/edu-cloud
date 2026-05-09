export const alerts = [
    {
        id: 1,
        title: "System Maintenance",
        desc: "MAR-Casablanca node will be offline for 15 minutes starting at 02:00 AM UTC.",
        time: "2 minutes ago",
        type: "system",
        icon: "fa-solid fa-triangle-exclamation",
        color: "red",
        unread: true
    },
    {
        id: 2,
        title: "Storage Quota Warning",
        desc: "You have used 68.2 GB out of 100 GB. Consider cleaning up old files.",
        time: "1 hour ago",
        type: "quota",
        icon: "fa-solid fa-hard-drive",
        color: "amber",
        unread: true
    },
    {
        id: 3,
        title: "Session Expiring Soon",
        desc: "Your VS Code session Projet_Signal will expire in 15 minutes.",
        time: "3 hours ago",
        type: "session",
        icon: "fa-solid fa-clock",
        color: "blue",
        unread: true
    },
    {
        id: 4,
        title: "System Update Complete",
        desc: "ENSAM CLOUD has been updated to version 2.4.0-STABLE successfully.",
        time: "Yesterday",
        type: "system",
        icon: "fa-solid fa-circle-check",
        color: "green",
        unread: false
    },
    {
        id: 5,
        title: "Session Saved",
        desc: "Your Jupyter Lab session DataAnalysis_v2 has been saved as a snapshot.",
        time: "2 days ago",
        type: "session",
        icon: "fa-solid fa-terminal",
        color: "blue",
        unread: false
    },
    {
        id: 6,
        title: "Quota Extended",
        desc: "Your compute time quota has been extended by 10 hours by your administrator.",
        time: "3 days ago",
        type: "quota",
        icon: "fa-solid fa-circle-check",
        color: "green",
        unread: false
    }
]