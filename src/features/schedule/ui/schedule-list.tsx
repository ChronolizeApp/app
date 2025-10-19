import { useAppSelector } from "@/shared/lib/types"
import { ScheduleCard } from "./schedule-card"

export const ScheduleList = () => {
  const { lessons } = useAppSelector(state => state.lesson)

  return (
    <div className="grid grid-rows-2 grid-cols-1 gap-4 p-2">
      {lessons.map((lesson) => (
        <ScheduleCard key={lesson.id} lesson={lesson}/>
      ))}
    </div>
  )
}
