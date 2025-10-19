import { MenuItemType } from "@/shared/lib/types"
import { cn } from "@/shared/lib/utils"
import { useLocation, useNavigate } from "react-router-dom"

export const Menubar = ({ items }: { items: MenuItemType[]}) => {
    const location = useLocation()
    const navigate = useNavigate()
    return (
        <div className="flex flex-row justify-around p-2 backdrop-blur-xs border-1 bg-white/50 rounded-xl">
            {items.map((item: MenuItemType) => {
                const active = location.pathname == item.href
                return <div key={item.title} className={cn(
                    "flex flex-col items-center text-sm font-medium p-2 transition-colors select-none",
                    active ? "text-black" : "text-gray-400 hover:text-gray-600"
                  )} onClick={() => !active && navigate(item.href) }>
                    <item.icon />
                    <p>{item.title}</p>
                </div>
            })}
        </div>
    )
}
