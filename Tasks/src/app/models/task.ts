import { Priority } from "../types/priority";

export class Task {
    id!: number;
    time!: string;
    task!: string;
    priority!: Priority;
}
