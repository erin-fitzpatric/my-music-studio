import { Lesson } from "./lesson.class";

export class Assignment {
    id: number;
    lesson: Lesson;
    description: string;

    constructor(id: number = 0, lesson: Lesson = new Lesson(), description: string = '') {
        this.id = id;
        this.lesson = lesson;
        this.description = description;
    }
}
