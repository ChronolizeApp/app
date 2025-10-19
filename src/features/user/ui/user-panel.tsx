import { useAppSelector } from "@/shared/lib/types"

export const UserDisplayPanel = () => {
    const { name } = useAppSelector(state => state.user)
    return (
        <div className="flex flex-row gap-2">
            <span className="font-medium text-lg text-white">{name}</span>
        </div>
    )
}
