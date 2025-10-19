export interface IUser {
    name: string;
    group: number,
    subgroup: boolean,
    notes: string[],

    settings: ISettings;
    notifications: string[];
}

export interface ISettings {
    theme: "light" | "dark"
    notifications: boolean,
}
