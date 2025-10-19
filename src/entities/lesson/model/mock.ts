import { ILesson } from "./types";

export const lessonItems: ILesson[]  = [
    {
        id: "1",
        date: new Date("2025-10-21"),
        timeStart: new Date("2025-10-21T10:40:00"),
        timeEnd: new Date("2025-10-21T12:10:00"),
        type: "Лекция",
        subject: "Устройство и функционирование информационной системы",
        teacher: "Алексанян А.К."
    },
    {
        id: "2",
        date: new Date("2025-10-21"),
        timeStart: new Date("2025-10-21T12:40:00"),
        timeEnd: new Date("2025-10-21T14:10:00"),
        type: "Лекция",
        subject: "Инженерно-техническая поддержка сопровождения информационной системы",
        teacher: "Алексанян А.К."
    },
    {
        id: "3",
        date: new Date("2025-10-21"),
        timeStart: new Date("2025-10-21T14:30:00"),
        timeEnd: new Date("2025-10-21T16:00:00"),
        type: "Практика",
        subject: "Инженерно-техническая поддержка сопровождения информационной системы",
        teacher: "Алексанян А.К."
    },
]
