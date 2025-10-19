import { Home, Calendar, Book, User } from "lucide-react";
import { Lesson, MenuItemType } from "../types";
import { paths } from "./paths";

export const menuItems: MenuItemType[] = [
    { title: "Главная", icon: Home, href: paths.index },
    { title: "Расписание", icon: Calendar, href: paths.schedule },
    { title: "Заметки", icon: Book, href: paths.notes },
    { title: "Профиль", icon: User, href: paths.profile },
]
