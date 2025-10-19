import { IUser } from "./types";

export const initialState: IUser = {
    name: "Роман",
    group: 3844,
    subgroup: true,
    notes: [],
    settings: {
        theme: "light",
        notifications: false
    },
    notifications: []
}
