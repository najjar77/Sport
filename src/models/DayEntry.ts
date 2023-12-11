import {SportStats} from "~/src/models/SportStats";

export interface DayEntry {
    id: string
    date: Date;
    entry: SportStats
}