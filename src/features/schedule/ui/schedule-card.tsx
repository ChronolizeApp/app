import { formatTimeRange } from "@/entities/lesson/lib"
import { Badge } from "@/shared/ui/badge"
import { Button } from "@/shared/ui/button"
import { FC } from "react"
import { IScheduleCard } from "../model/types"

export const ScheduleCard: FC<IScheduleCard> = ({ lesson }) => {
    return (
        <div className="flex flex-col w-full p-2 gap-2 rounded-xl select-none">
          <div className="flex flex-row justify-between items-start gap-2">
            <span className="font-bold text-lg">{lesson.subject}</span>
            <Badge className={`${lesson.type == "Практика" ? "bg-green-700" : "bg-blue-500"} text-white dark:bg-blue-600`}>{lesson.type}</Badge>
          </div>
          <div className="mb-4">
            <p className="text-gray-600 text-base">Преподаватель: {lesson.teacher}</p>
            <span className="text-gray-600">
              Время: {formatTimeRange(lesson.timeStart, lesson.timeEnd)}
            </span>
          </div>
          <Button size="sm" variant="secondary">Подробнее</Button>
        </div>
    )
}
