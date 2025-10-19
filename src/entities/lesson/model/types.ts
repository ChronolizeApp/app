export interface ILesson {
    id: string;
    date: Date;
    timeStart: Date;
    timeEnd: Date;
    type: "Лекция" | "Практика" | "Зачет" | "Экзамен";
    subject: string;
    teacher: string;
    location?: string;
    link?: string;
    status?: "planned" | "completed" | "canceled";
}

export interface ILessonReducer {
    lesson: ILesson;
    lessons: ILesson[];

    isLoading: boolean;
    error: string;
}
