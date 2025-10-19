import { ScheduleList } from "@/features/schedule/ui"

export const SchedulePage = () => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row">
                {/* Тут добавить блок с Date Picker */}
            </div>
            <ScheduleList />
        </div>
    )
}
