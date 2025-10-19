import { UserDisplayPanel } from "@/features/user/ui/user-panel"
import { cn } from "@/shared/lib/utils"
import { Button } from "@/shared/ui/button"
import { Bell, SunDim } from "lucide-react"

export const Shellbar = () => {
    return (
        <div className="flex flex-row justify-between items-center px-6 py-2 bg-blue-500">
            <UserDisplayPanel />
            <div className="flex flex-row gap-2">
                <Button size="icon" variant="ghost" aria-label="Theme Switcher">
                    <SunDim className={cn("text-white size-5")}/>
                </Button>
                <Button size="icon" variant="ghost" aria-label="Notification">
                    <Bell className={cn("text-white size-5")}/>
                </Button>
            </div>
        </div>
    )
}
