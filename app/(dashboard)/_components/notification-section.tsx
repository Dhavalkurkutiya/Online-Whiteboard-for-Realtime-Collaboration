"use client"

import { Bell } from "lucide-react"

export const NotificationSection = () => {
    return (
        <div className="relative">
            <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
            <Bell size={24} />
        </div>
    )
}